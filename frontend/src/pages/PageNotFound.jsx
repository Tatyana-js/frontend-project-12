import { useTranslation } from 'react-i18next';
import pageNotFound from '../assets/404-error.svg';

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <img 
        src={pageNotFound} 
        alt={t('pageNotFound')} 
        className="img-fluid h-25" 
      />
      <h1 className="h4 text-muted">{t('pageNotFound')}</h1>
      <p className="text-muted">
        {t('redirect')}
        <a href="/">{t('redirectOnMainPage')}</a>
      </p>
    </div>
  );
};

export default PageNotFound;