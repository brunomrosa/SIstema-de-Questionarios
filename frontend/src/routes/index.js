import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import CreateSurvey from '~/pages/CreateSurvey';
import CreateQuestions from '~/pages/CreateQuestions';
import Survey from '~/pages/Survey';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" exact component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/questionario" component={Survey} isPrivate />
      <Route path="/criar" component={CreateSurvey} exact isPrivate />
      <Route path="/criar/perguntas" component={CreateQuestions} isPrivate />
    </Switch>
  );
}
