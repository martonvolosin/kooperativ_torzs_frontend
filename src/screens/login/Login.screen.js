import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';

import { LoginWrapper } from '../../components';

const Login = () => {
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  const renderLoginForm = () => (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('email')}</Form.Label>
          <Form.Control type="email" placeholder={t('emailPlaceholder')} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('password')}</Form.Label>
          <Form.Control type="password" />
          <Form.Text className="text-muted">{t('forgotPassword')}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          {t('login')}
        </Button>
      </Form>
      <Form.Text className="text-muted">{t('noProfile')}</Form.Text>
      <Button>{t('register')}</Button>
    </div>
  );

  return <LoginWrapper>{renderLoginForm()}</LoginWrapper>;
};

export { Login };
