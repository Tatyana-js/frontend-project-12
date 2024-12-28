import pageNotFound from '../assets/404-error.jpg';

const PageNotFound = () => (
  <div className="text-center">
    <img 
      src={pageNotFound} 
      alt="Страница не найдена" 
      className="img-fluid h-15" 
    />
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">
      Но вы можете перейти
      {' '}
      <a href="/">на главную страницу</a>
    </p>
  </div>
);

export default PageNotFound;