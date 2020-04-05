import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const Review = () => {
    const { t } = useTranslation();
    const history = useHistory();
  
    const [option, setOption] = useState({
      satisfied_1: false,
      unsatisfied_1: false,
      satisfied_2: false,
      unsatisfied_2: false,
      satisfied_3: false,
      unsatisfied_3: false,
    });
  
    const onSubmit = () => {
      // TODO: handle submit btn press.
    };
  
    const handleOptionChange = key => {
      setOption(prevOption => {
        const modifiedOption = { ...prevOption };
        Object.keys(prevOption).forEach(optionKey => {
          if (optionKey !== key) {
            modifiedOption[optionKey] = false;
          } else {
            modifiedOption[optionKey] = true;
          }
        });
        return modifiedOption;
      });
    };
  
    return (
      <LoginWrapper text={t('new_item_guide')}>
        <div className="d-flex align-items-center flex-column justify-content-center h-100">
            <h3 className="left">{t('review')}</h3>
          <Form className="w-50" onSubmit={onSubmit} noValidate>
            <Form.Group controlId="radio-buttons">
              <Form.Label className="title">{t('satisfied_transaction')}</Form.Label>
              <Form.Check
                type="radio"
                label={t('accept_review')}
                checked={option.satisfied_1}
                onChange={() => handleOptionChange('satisfied_1')}
              />
              <Form.Check
                type="radio"
                label={t('deny_review')}
                checked={option.unsatisfied_1}
                onChange={() => handleOptionChange('unsatisfied_1')}
              />
            </Form.Group>
            <Form.Group controlId="radio-buttons">
              <Form.Label className="title">{t('satisfied_quality')}</Form.Label>
              <Form.Check
                type="radio"
                label={t('accept_review')}
                checked={option.satisfied_2}
                onChange={() => handleOptionChange('satisfied_2')}
              />
              <Form.Check
                type="radio"
                label={t('deny_review')}
                checked={option.unsatisfied_2}
                onChange={() => handleOptionChange('unsatisfied_2')}
              />
            </Form.Group>
            <Form.Group controlId="radio-buttons">
              <Form.Label className="title">{t('satisfied_operation')}</Form.Label>
              <Form.Check
                type="radio"
                label={t('accept_operation')}
                checked={option.satisfied_3}
                onChange={() => handleOptionChange('satisfied_3')}
              />
              <Form.Check
                type="radio"
                label={t('deny_operation')}
                checked={option.unsatisfied_3}
                onChange={() => handleOptionChange('unsatisfied_3')}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" block>
              {t('save')}
            </Button>
            <Button
              variant="secondary"
              onClick={() => history.push('/home')}
              block
            >
              {t('back')}
            </Button>
          </Form>
        </div>
      </LoginWrapper>
    );
  };

export { Review };
