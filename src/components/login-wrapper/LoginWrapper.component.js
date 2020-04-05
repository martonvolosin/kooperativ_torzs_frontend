import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginWrapper = ({ children, text }) => {
  const { t } = useTranslation();
  return (
    <div className="no-gutters row">
      <div className="d-none d-md-block col-md-4 leftSidePanel">
        <div className="whiteBackgroundContainer">
          <h1 className="text-center leftSideWrapperTitle">{t('title')}</h1>
          {text.split('\n').map(item => {
            return (
              <p className="leftSideWrapperParagraph" key={`${item}`}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="col-sm-12 col-md-8">{children}</div>
    </div>
  );
};

export { LoginWrapper };
