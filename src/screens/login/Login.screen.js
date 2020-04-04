import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const Login = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  const handleForgotPassword = () => {
    console.log('forgot password');
  };

  const renderLoginForm = () => (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <Form className="w-25" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('email')}</Form.Label>
          <Form.Control type="email" placeholder={t('emailPlaceholder')} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('password')}</Form.Label>
          <Form.Control type="password" />
          <Button
            variant="link"
            onClick={handleForgotPassword}
            className="text-muted"
            size="sm"
          >
            {t('forgotPassword')}
          </Button>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          {t('login')}
        </Button>
        <Form.Text className="text-muted registerSection">
          {t('noProfile')}
        </Form.Text>
        <Button
          variant="secondary"
          onClick={() => history.push('/registration')}
          block
        >
          {t('register')}
        </Button>
      </Form>
    </div>
  );

  return <LoginWrapper>{renderLoginForm()}</LoginWrapper>;
};

export { Login };
