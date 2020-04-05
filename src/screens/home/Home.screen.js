import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { mockData } from '../../utilities/mockData';
import { TableRow } from './components/table-row';

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const renderHeader = () => (
    <div className="container homeContainer">
      <div className="d-flex justify-content-between">
        <h1>{t('homeTitle')}</h1>
        <div>
          <Button
            className="homeButton"
            onClick={() => history.push('/profile')}
            variant="outline-secondary"
          >
            {t('profile')}
          </Button>
          <Button
            onClick={() => history.push('/new-item')}
            className="homeButton"
          >
            {t('addItem')}
          </Button>
        </div>
      </div>
    </div>
  );

  const renderTableBody = () =>
    mockData.map(({ description, categoryId, type, quantity }, index) => (
      <TableRow
        description={description}
        categoryId={categoryId}
        type={type}
        quantity={quantity}
        index={index + 1}
      />
    ));

  const renderTable = () => (
    <Table bordered className="container">
      <thead>
        <tr>
          <th colSpan="1">#</th>
          <th colSpan="1">{t('headerRequest')}</th>
          <th colSpan="1">{t('headerCategory')}</th>
          <th colSpan="1">{t('headerName')}</th>
          <th colSpan="1">{t('headerStatus')}</th>
          <th colSpan="1">{t('headerMatch')}</th>
        </tr>
      </thead>
      <tbody>{renderTableBody()}</tbody>
    </Table>
  );

  return (
    <>
      {renderHeader()}
      {renderTable()}
    </>
  );
};

export { Home };
