import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const Registration = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [termOfUseModalOpen, setTermOfUseModalOpen] = useState(false);

  const handleNext = () => {
    history.push('/registration-location');
    console.log('next..');
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

  const renderRegistrationForm = () => (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <Form className="w-25" onSubmit={handleNext}>
        <Form.Group controlId="lastName">
          <Form.Label>{t('lastName')}</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>{t('firstName')}</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('email')}</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder={t('emailPlaceholder')}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>{t('optionalPhone')}</Form.Label>
          <Form.Control type="tel" placeholder={t('phonePlaceholder')} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('password')}</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group controlId="passwordAgain">
          <Form.Label>{t('passwordAgain')}</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group controlId="termOfUse">
          <Form.Check
            type="checkbox"
            size="sm"
            label={t('termOfUseBlockOne')}
          />
          <Button
            variant="link"
            size="sm"
            onClick={() => setTermOfUseModalOpen(true)}
          >
            {t('termOfUse')}
          </Button>
        </Form.Group>
        <Button variant="primary" type="submit" block>
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
