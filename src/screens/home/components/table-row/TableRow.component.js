import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const TableRow = ({
  description,
  categoryId,
  type,
  quantity,
  index,
}) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const TYPE = { REQUEST: 'Kérés', OFFER: 'Felajánlás' };
  return (
    <>
      <tr className={type === 'OFFER' ? 'offerType' : 'requestType'}>
        <td className="align-middle">{index}</td>
        <td className="align-middle">{TYPE[type]}</td>
        <td className="align-middle">{categoryId}</td>
        <td className="align-middle">{description}</td>
        <td className="align-middle">status?</td>
        <td className="align-middle d-flex justify-content-between">
          {quantity}
          <Button onClick={() => setVisible(!visible)} size="sm">
            {!visible ? t('details') : t('close')}
          </Button>
        </td>
      </tr>
      {visible && (
        <tr>
          <td className="align-middle d-flex justify-content-between">
            Fiszem faszom kiscica
          </td>
        </tr>
      )}
    </>
  );
};
