import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import * as styles from './styles';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import history from '~/services/history';
function CreateQuestions() {

  const [questions, setQuestions] = useState([]);
  const [survey, setSurvey] = useState({ title: null, createdAt: null });
  /* async function getSurvey(profile) {
    const url = 'questions?survey=';
    const id = history.location.search.split('=', 2);
    const response = await api.get('/surveys/' + id[1]);
    const { author } = response.data;
    console.log(profile);
    console.log(author);
    if (profile.id !== author.id) {
      history.push('/');
    }
  } */

  async function getSurveyInfo() {
    const id = history.location.search.split('=', 2);
    const surveyResponse = await api.get(`/surveys/` + id[1]);

    const { title, createdAt } = surveyResponse.data;
    const date = new Date(createdAt);
    const formatedDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setSurvey({ title: title, createdAt: formatedDate });
  }

  async function loadQuestions() {
    const id = history.location.search.split('=', 2);

    const questionsResponse = await api.get(`/questions?survey=` + id[1]);

    var array = [];

    for await (const element of questionsResponse.data) {
      const answersReponse = await api
        .get(`/answers?question=${element.id}`)
        .catch((err) => console.log(err));

      if (answersReponse) {
        const date = new Date(answersReponse.data.createdAt);
        const formatedDate =
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear();
        array.push(
          new Object({
            question: { title: element.title, id: element.id },
            answer: {
              content: answersReponse.data.content,
              createdAt: formatedDate,
              lat: answersReponse.data.lat,
              long: answersReponse.data.long,
            },
          })
        );
      } else {
        array.push(
          new Object({
            question: { title: element.title, id: element.id },
            answer: null,
          })
        );
      }
    }

    setQuestions(array);
  }

  useEffect(() => {
    loadQuestions();
    getSurveyInfo();

  }, [setQuestions, setSurvey]);

  async function handleSubmit(data, id) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          console.log('Latitude is :', position.coords.latitude);
          console.log('Longitude is :', position.coords.longitude);
          data.lat = position.coords.latitude;
          data.long = position.coords.longitude;

          const sucess =await api.post('/answers?question=' + id, data).catch((error) => {
            toast.error('Erro ao responder a pergunta');
            console.log(error)
          });
          loadQuestions();
          if(sucess){
            toast.success('Criado com sucesso');
          }

        },
        function (error) {
          if (error.code === 1) {
            toast.error('Por favor permita a permissão para sua localização');
          }
        }
      );
    } else {
      toast.error('Seu navegador não suporta geocalização');
    }
  }

  const schema = Yup.object().shape({
    content: Yup.string().required('Por favor preencha!'),
  });

  return (
    <styles.Container>
      <div className="create-form">
        <h3>Quer voltar?</h3>
        <Link to="/">clique aqui!</Link>
      </div>
      <h1>{survey.title}</h1>
      <h3>Data de criação: {survey.createdAt}</h3>
      <ul className="question-list">
        {questions.map((element) => {
          return element.answer !== null ? (
            <styles.Box className="create-form">
              <Form
                className="form-submit"
                schema={schema}
                onSubmit={handleSubmit}
              >
                <h2>{element.question.title}</h2>
                <p>{element.answer.content}</p>
                <p>Data do comentário: {element.answer.createdAt}</p>
                <p>
                  lat: {element.answer.lat} long: {element.answer.long}
                </p>
              </Form>
            </styles.Box>
          ) : (
            <styles.Box className="create-form">
              <Form
                className="form-submit"
                schema={schema}
                onSubmit={(data) => handleSubmit(data, element.question.id)}
              >
                <h2>{element.question.title}</h2>
                <Input name="content" placeholder="Qual sua resposta?" />
                <button type="submit">Responder</button>
              </Form>
            </styles.Box>
          );
        })}
      </ul>
    </styles.Container>
  );
}

export default CreateQuestions;
