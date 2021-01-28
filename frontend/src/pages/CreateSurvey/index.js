import React from 'react';
import api from '~/services/api';
import * as styles from './styles';
import history from '~/services/history';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

function CreateSurvey() {
  async function handleSubmit(data) {

    if (!(await schema.isValid(data))) {
      toast.error('Mínimo de 6 caracteres');
    }
    if(await schema.isValid(data)){
      const response = await api
      .post('/surveys', data)
      .catch((error) =>
        toast.error(
          'Ocorreu um erro ao criar o questionário, verifique se já existe um questionário com esse nome'
        )
      );
    if(response){
      history.push('/criar/perguntas?questionario=' + response.data.id);
    }

    }

  }

  const schema = Yup.object().shape({
    title: Yup.string().min(6).required('')
  });

  return (
    <styles.Container>
      <h1>Crie sua pesquisa!</h1>
      <div className="create-form">
        <h3>Quer voltar para a dashboard?</h3>
        <Link to="/">clique aqui!</Link>
      </div>

      <styles.Content>
        <styles.Box>
          <Form  onSubmit={handleSubmit}>
            <Input name="title" placeholder="Titulo do Formulário" />

            <button type="submit">Criar</button>
          </Form>
        </styles.Box>
      </styles.Content>
    </styles.Container>
  );
}

export default CreateSurvey;
