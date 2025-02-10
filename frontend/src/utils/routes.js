const apiPath = '/api/v1';

export default {
  main: () => '/',
  login: () => '/login',
  signUp: () => '/signup',
  loginPath: () => [apiPath, 'login'].join('/'),
  channelsPath: () => [apiPath, 'channels'].join('/'),
  signUpPath: () => [apiPath, 'signup'].join('/'),
};