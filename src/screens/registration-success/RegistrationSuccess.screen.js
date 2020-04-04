import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const RegistrationSuccess = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        history.push('/home');
    };

    const renderRegistrationSuccess = () => (
      <div className="d-flex align-items-left container flex-column justify-content-center h-100">
        <h3 class="disclaimer">{t('registrationSuccess')}</h3>
        <p class="disclaimer">{t('registrationSuccessText_1')}</p>
        <ul>
            <li>{t('registrationSuccessList_1')}</li>
            <li>{t('registrationSuccessList_2')}</li>
            <li>{t('registrationSuccessList_3')}</li>
            <li>{t('registrationSuccessList_4')}<br/>{t('registrationSuccessList_4_e')}</li>
            <li>{t('registrationSuccessList_5')}</li>
        </ul>
        <p class="disclaimer">{t('registrationSuccessText_2')}</p>
        <Form className="w-25 d-flex align-items-left container flex-column justify-content-center" onSubmit={handleSubmit}>          
          <Button variant="primary" type="submit" block>
            {t('next')}
          </Button>
        </Form>
      </div>
    );

    return <LoginWrapper>{renderRegistrationSuccess()}</LoginWrapper>;
};

export { RegistrationSuccess };
