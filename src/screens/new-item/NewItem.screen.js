import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Col, Row } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const CATEGORIES = [
  { id: 0, name: 'Tejtermék' },
  { id: 1, name: 'Hús és hentes árú' },
  { id: 2, name: 'Zöldség, gyümölcs' },
];

const UNITS = [
  { id: 0, name: 'Liter' },
  { id: 1, name: 'Kilogramm' },
  { id: 2, name: 'Darab' },
];

const NewItem = () => {
  const { t } = useTranslation();
  const { history } = useHistory();

  const [category, setCategory] = useState();
  const [categoryName, setCategoryName] = useState();
  const [comment, setComment] = useState();
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState(UNITS[0]);
  const [option, setOption] = useState({
    offer_product: false,
    offer_help: false,
    request_product: false,
    request_help: false,
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
        <Form className="w-25" onSubmit={onSubmit} noValidate>
          <Form.Group controlId="radio-buttons">
            <Form.Label className="title">{t('add_item_title')}</Form.Label>
            <Form.Check
              type="radio"
              label={t('offer_product')}
              checked={option.offer_product}
              onChange={() => handleOptionChange('offer_product')}
            />
            <Form.Check
              type="radio"
              label={t('offer_help')}
              checked={option.offer_help}
              onChange={() => handleOptionChange('offer_help')}
            />
            <Form.Check
              type="radio"
              label={t('request_product')}
              checked={option.request_product}
              onChange={() => handleOptionChange('request_product')}
            />
            <Form.Check
              type="radio"
              label={t('request_help')}
              checked={option.request_help}
              onChange={() => handleOptionChange('request_help')}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>{t('category')}</Form.Label>
            <Form.Control
              as="select"
              defaultValue={t('category_dropdown_placeholder')}
              onChange={e => setCategory(CATEGORIES[e.target.value])}
            >
              <option disabled>{t('category_dropdown_placeholder')}</option>
              {CATEGORIES.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="category_name">
            <Form.Label>{t('category_name')}</Form.Label>
            <Form.Control
              type="text"
              onChange={e => setCategoryName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>{t('comment')}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={e => setComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>{t('amount')}</Form.Label>
            <Row>
              <Col sm="4">
                <Form.Control
                  type="text"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </Col>
              <Col sm="8">
                <Form.Control
                  as="select"
                  onChange={e => setUnit(UNITS[e.target.value])}
                >
                  {UNITS.map((item, index) => (
                    <option key={item.id} value={index}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" block>
            {t('next')}
          </Button>
          <Button variant="secondary" onClick={() => history.push('')} block>
            {t('back')}
          </Button>
        </Form>
      </div>
    </LoginWrapper>
  );
};

export { NewItem };
