import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from '../../components';

const Profile = () => {
    const { t } = useTranslation();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handle submit');
    };
    const handleLogout = e =>{
        e.preventDefault();
        console.log('logout');
    }

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const renderModal = () => {
        return (
          <Modal
            centered
            scrollable
            backdrop="static"
            show={deleteModalOpen}
            size="md"
          >
            <Modal.Header>
              <Modal.Title>{t('deleteModalTitle')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{t('deleteModalText')}</Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => setDeleteModalOpen(false)}
                variant="secondary"
              >
                {t('cancel')}
              </Button>
              <Button
                onClick={deleteProfile}
                variant="danger"
                >
                    {t('confirmDelete')}
                </Button>
            </Modal.Footer>
          </Modal>
        );
      };

    /*
    const handleDelete = e =>{
        e.preventDefault();
        console.log('delete modal');
        //renderModal();
    }
    */
    const deleteProfile = e => {
        e.preventDefault();
        console.log("delete user")
    }
    
    const renderProfile = () => (
      <div className="d-flex align-items-center container flex-column justify-content-center h-100">
        <h3>{t('myProfile')}</h3>
        <Form className="w-25" onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
                <Form.Label>{t('fullName')}</Form.Label>
                <Form.Control type="text"></Form.Control>  
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>{t('email')}</Form.Label>
                <Form.Control type="email"></Form.Control>  
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label>{t('optionalPhone')}</Form.Label>
                <Form.Control type="tel"></Form.Control>  
            </Form.Group>
            <Form.Group controlId="oldPassword">
                <Form.Label>{t('oldPassword')}</Form.Label>
                <Form.Control type="password"></Form.Control>  
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>{t('password')}</Form.Label>
                <Form.Control type="password"></Form.Control>  
            </Form.Group>
            <Form.Group controlId="passwordAgain">
                <Form.Label>{t('passwordAgain')}</Form.Label>
                <Form.Control type="password"></Form.Control>  
            </Form.Group>           
          <Button variant="primary" type="submit" block>
            {t('saveProfile')}
          </Button>
          <Button variant="secondary" onClick={handleLogout} block>
            {t('logout')}
          </Button>
          <Button variant="danger" onClick={() => setDeleteModalOpen(true)} block>
            {t('deleteProfile')}
          </Button>
          <Button variant="secondary" onClick={(e) => history.push('')} block>
          {t('back')}
        </Button>
        </Form>
      </div>
    );

    return (
        <>
        {renderModal()}
        <LoginWrapper>{renderProfile()}</LoginWrapper>;
        </>
    ) 
};

export { Profile };
