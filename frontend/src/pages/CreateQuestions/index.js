import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import * as styles from './styles';
import history from '~/services/history';
function CreateQuestions() {
  const [survey, setSurvey] = useState({});
  const [id, setId] = useState('')
  const profile = useSelector((state) => state.user.profile);

  async function getSurvey(profile) {
    const id = history.location.search.split('=', 2);
    setId(id[1])
    const response = await api.get('/surveys/' + id[1]);
    const { author } = response.data;

    const date = new Date(response.data.createdAt);
    const formatedDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    response.data.createdAt = formatedDate;
    setSurvey(response.data);

    if (profile.id !== author.id) {
      history.push('/');
    }
  }

  useEffect(() => {
    getSurvey(profile);
  }, [setSurvey]);

  async function handleSubmit(data) {
    const url = 'questions?survey=';
    const id = history.location.search.split('=', 2);
    if (!data.title && !data.target) {
      toast.error('Mínimo de 6 caracteres');
    }
    if (data.title) {
      if (!(await schema.isValid(data))) {
        toast.error('Mínimo de 6 caracteres');
      }
      if (await schema.isValid(data)) {
        const response = await api.post(url + id[1], data).catch((err) => {});
        if (response) {
          toast.success('Criado com sucesso!');
        } else {
          toast.error(
            'Ocorreu um erro ao criar a pergunta, verifique se ele está vazio ou já existe uma pergunta com esse nome'
          );
        }
      }
    }
    if (!data.title) {
      if (data.target) {
        const { value } = data.target[0];
        if (value === '' || value.length <= 5) {
          console.log(value);
          toast.error('Mínimo de 6 caracteres');
        }

        if (value.length >= 6 && value !== '') {
          const content = { title: value };
          const response = await api
            .post(url + id[1], content)
            .catch((err) => {});
          if (response) {
            toast.success('Criado com sucesso!');
          } else {
            toast.error(
              'Ocorreu um erro ao criar a pergunta, verifique se ele está vazio ou já existe uma pergunta com esse nome'
            );
          }
        }
      }
    }
  }

  function appendQuestion() {
    const originalInput = document
      .getElementsByClassName('form')[0]
      .cloneNode(true);
    originalInput.querySelector('.input1').value = '';

    document
      .getElementsByClassName('question-list')[0]
      .appendChild(originalInput);

    const currentForm =
      document.getElementsByClassName('form').length - 1;

    document
      .getElementsByClassName('form')
      [currentForm].addEventListener('submit', handleSubmit);
    document
      .getElementsByClassName('form')
      [currentForm].addEventListener('submit', function (event) {
        event.preventDefault();
      });
  }
  const schema = Yup.object().shape({
    title: Yup.string().min(6).required(''),
  });

  return (
    <styles.Container>
      <div className="create-form">

        <h3 ><Link to='/dashboard'>Já terminou? Procure seu formulário na dashboard</Link></h3>
      </div>
      <h1>{survey.title}</h1>
      <h3>{survey.createdAt}</h3>

      <div className="question-list">
        <styles.Box className="form">
          <Form className="form-submit" onSubmit={handleSubmit}>
            <Input
              className="input1"
              name="title"
              placeholder="Qual a pergunta?"
            />

            <button type="submit">Criar</button>
          </Form>
        </styles.Box>
      </div>
      <button onClick={appendQuestion}>adicionar pergunta</button>
    </styles.Container>
  );
}

export default CreateQuestions;
