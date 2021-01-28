import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import history from '~/services/history';
import { Link } from 'react-router-dom';
import * as styles from './styles';

export default function Dashboard() {
  const [survey, setSurvey] = useState([]);

  function handleRedirect(id) {
    history.push(`/questionario?=${id}`);
  }

  useEffect(() => {
    async function loadSurvey() {
      const response = await api.get(`/surveys`);
      const { data } = response;
      setSurvey(data);
    }

    loadSurvey();
  }, [setSurvey]);

  return (
    <styles.Container>
      <h1>Seja bem-vindo, Consulte os questionários!</h1>
      <div className="create-form">
        <h3>Quer criar um questionário?</h3>
        <Link to="/criar">clique aqui!</Link>
      </div>

      <styles.Content>
        {survey.length !== 0 ? (
          survey.map((survey) => (
            <Link to={`/questionario?=${survey.id}`}>
              <styles.Box>
                <h3>{survey.title}</h3> <h4>{survey.author.name}</h4>
              </styles.Box>
            </Link>
          ))
        ) : (
          <h1>Não há questionarios disponiveis</h1>
        )}
      </styles.Content>
    </styles.Container>
  );
}
