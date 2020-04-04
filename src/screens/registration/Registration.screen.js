import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { LoginWrapper } from '../../components';
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConf,
} from '../../utilities/validation.utils';

const Registration = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [isTermsOfUseAccepted, setIsTermsOfUseAccepted] = useState(false);
  const [termOfUseModalOpen, setTermOfUseModalOpen] = useState(false);

  const handleNext = e => {
    e.preventDefault();
    history.push('/registration-location', {
      email,
      password,
      name,
      phoneNumber,
    });
  };

  const renderModal = () => {
    return (
      <Modal
        centered
        scrollable
        backdrop="static"
        show={termOfUseModalOpen}
        size="md"
      >
        <Modal.Header>
          <Modal.Title>{t('termOfUse')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('loremIpsum')}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setTermOfUseModalOpen(false)}
            variant="primary"
          >
            {t('accept')}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const isSubmitDisabled =
    !name ||
    !isValidEmail(email) ||
    !isValidPassword(password) ||
    !isValidPasswordConf(password, passwordConf) ||
    !isTermsOfUseAccepted;

  const renderRegistrationForm = () => (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <Form className="w-25" onSubmit={handleNext} noValidate>
        <Form.Group controlId="name">
          <Form.Label>{t('name')}</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            isValid={name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('email')}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            isValid={isValidEmail(email)}
            isInvalid={email && !isValidEmail(email)}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>{t('optionalPhone')}</Form.Label>
          <Form.Control
            type="tel"
            placeholder={t('phonePlaceholder')}
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
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
        </Form.Group>
        <Form.Group controlId="passwordAgain">
          <Form.Label>{t('passwordAgain')}</Form.Label>
          <Form.Control
            type="password"
            value={passwordConf}
            onChange={e => setPasswordConf(e.target.value)}
            isValid={isValidPasswordConf(password, passwordConf)}
            isInvalid={
              passwordConf && !isValidPasswordConf(password, passwordConf)
            }
          />
        </Form.Group>
        <Form.Group controlId="termOfUse">
          <Form.Check
            type="checkbox"
            size="sm"
            label={t('termOfUseBlockOne')}
            checked={isTermsOfUseAccepted}
            onChange={() => setIsTermsOfUseAccepted(!isTermsOfUseAccepted)}
            isValid={isTermsOfUseAccepted}
          />
          <Button
            variant="link"
            size="sm"
            onClick={() => setTermOfUseModalOpen(true)}
          >
            {t('termOfUse')}
          </Button>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          block
          disabled={isSubmitDisabled}
        >
          {t('next')}
        </Button>
        <Button variant="secondary" onClick={() => history.push('')} block>
          {t('back')}
        </Button>
      </Form>
    </div>
  );

  return (
    <>
      {renderModal()}
      <LoginWrapper>{renderRegistrationForm()}</LoginWrapper>
    </>
  );
};

export { Registration };
