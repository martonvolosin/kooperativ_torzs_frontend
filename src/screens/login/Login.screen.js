import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import {
  isValidEmail,
  isValidPassword,
} from '../../utilities/validation.utils';

const Login = ({ login, accessToken }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (accessToken) {
      history.push('/home');
    }
  }, [accessToken, history]);

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  const handleForgotPassword = () => {
    // TODO: Handle forgotten password
  };

  const isSubmitDisabled = !isValidEmail(email) || !isValidPassword(password);

  const renderLoginForm = () => (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <Form className="w-25" onSubmit={handleSubmit} noValidate>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('email')}</Form.Label>
          <Form.Control
            type="email"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            isValid={isValidEmail(email)}
            isInvalid={email && !isValidEmail(email)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('password')}</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            isValid={isValidPassword(password)}
            isInvalid={password && !isValidPassword(password)}
          />
          <Button
            variant="link"
            onClick={handleForgotPassword}
            className="text-muted"
            size="sm"
          >
            {t('forgotPassword')}
          </Button>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          block
          disabled={isSubmitDisabled}
        >
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
      <div className="socialButtonContainer row no-gutters justify-content-between w-25">
        <p className="text-muted socialText">{t('socialText')}</p>
        <img alt="facebook" className="col-sm-5" src={facebook} />
        <img alt="google" className="col-sm-5" src={google} />
      </div>
    </div>
  );

  return <LoginWrapper text={t('guide')}>{renderLoginForm()}</LoginWrapper>;
};

export { Login };
