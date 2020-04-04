import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginWrapper = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="no-gutters row">
      <div className="d-none d-md-block col-md-5 leftSidePanel">
        <div className="whiteBackgroundContainer">
          <h1 className="text-center leftSideWrapperTitle">{t('title')}</h1>
          <p className="leftSideWrapperParagraph">{t('howToUse')}</p>
          <p className="leftSideWrapperParagraph">{t('doYouNeed')}</p>
          <p className="leftSideWrapperParagraph">{t('doYouChange')}</p>
          <p className="leftSideWrapperParagraph">{t('doYouShare')}</p>
          <p className="leftSideWrapperParagraph">{t('stayTogether')}</p>
          <p className="leftSideWrapperParagraph">{t('noShameToAsk')}</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-7">{children}</div>
    </div>
  );
};

export { LoginWrapper };
