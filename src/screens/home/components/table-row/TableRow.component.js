import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const TableRow = ({
  description,
  categoryId,
  type,
  quantity,
  index,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const TYPE = { REQUEST: 'Kérés', OFFER: 'Felajánlás' };

  const renderExpandedRow = () => (
    <tr className={type === 'OFFER' ? 'offerType' : 'requestType'}>
      <td colSpan={3} className="d-flex-row">
        <h4>Megjegyzes</h4>
        <p className="text-justify">{t('descriptionLoremIpsum')}</p>
      </td>
      <td colSpan={3}>
        <h4>Talalatok</h4>
        <div className="d-flex-inline align-middle">
          <p>Kovacs Bela - ertekeles (9.4)</p>
          <Button onClick={() => history.push('/chat')} size="sm">
            Felveszem a kapcsolatot
          </Button>
        </div>
      </td>
    </tr>
  );

  return (
    <>
      <tr className={type === 'OFFER' ? 'offerType' : 'requestType'}>
        <td colSpan="1" className="align-middle">
          {index}
        </td>
        <td colSpan="1" className="align-middle">
          {TYPE[type]}
        </td>
        <td colSpan="1" className="align-middle">
          {categoryId}
        </td>
        <td colSpan="1" className="align-middle">
          {description}
        </td>
        <td colSpan="1" className="align-middle">
          status?
        </td>
        <td colSpan="1" className="align-middle d-flex justify-content-between">
          {quantity}
          <Button onClick={() => setVisible(!visible)} size="sm">
            {!visible ? t('details') : t('close')}
          </Button>
        </td>
      </tr>
      {visible && renderExpandedRow()}
    </>
  );
};
