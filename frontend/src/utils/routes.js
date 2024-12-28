const apiPath = '/api/v1';

export default {
  main: () => '/',
  login: () => '/login',
  loginPath: () => [apiPath, 'login'].join('/'),
};