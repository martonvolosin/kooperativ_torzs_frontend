import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const RegistrationLocation = () => {
    const { t } = useTranslation();
    const history = useHistory();

    let getPosition = function (options) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      }

    const handleSubmit = e => {
      e.preventDefault();
      getPosition()
        .then((position) => {
          console.log(position.coords.latitude + ", " + position.coords.longitude);
        })
        .catch((err) => {
          console.error(err.message);
        });
    };

    const renderRegistrationLocationForm = () => (
      <div className="d-flex align-items-left container flex-column justify-content-center h-100">
        <h3>{t('registrationLocationTitle')}</h3>
        <p class="disclaimer">{t('registrationLocationText_1')}</p>
        <p class="disclaimer">{t('registrationLocationText_2')}</p>
        <p class="disclaimer">{t('registrationLocationText_3')}</p>
        <p class="disclaimer">{t('registrationLocationText_4')}</p>
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

    return <LoginWrapper>{renderRegistrationLocationForm()}</LoginWrapper>;
}

export { RegistrationLocation };
