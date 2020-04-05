import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const RegistrationLocation = ({
  location: { state },
  register,
  accessToken,
}) => {
  const { t } = useTranslation();
  const history = useHistory();

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (accessToken) {
      history.push('/registration-success');
    }
  }, [accessToken, history]);

  useEffect(() => {
    if (location) {
      register({ ...state, location });
    }
  }, [location, register, state]);

  const handleSubmit = e => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude;
        const lon = coords.longitude;
        setLocation({ lat, lon });
      },
      error => {
        console.log(error);
      },
    );
  };

  const renderRegistrationLocationForm = () => (
    <div className="d-flex align-items-left container flex-column justify-content-center h-100">
      <h3>{t('registrationLocationTitle')}</h3>
      <p className="disclaimer">{t('registrationLocationText_1')}</p>
      <p className="disclaimer">{t('registrationLocationText_2')}</p>
      <p className="disclaimer">{t('registrationLocationText_3')}</p>
      <p className="disclaimer">{t('registrationLocationText_4')}</p>
      <Form className="w-25" onSubmit={handleSubmit}>
        <Button variant="primary" type="submit" block>
          {t('approve')}
        </Button>
        <Button
          variant="secondary"
          onClick={() => history.push('/registration')}
          block
        >
          {t('back')}
        </Button>
      </Form>
    </div>
  );

  return (
    <LoginWrapper text={t('guide')}>
      {renderRegistrationLocationForm()}
    </LoginWrapper>
  );
};

export { RegistrationLocation };
