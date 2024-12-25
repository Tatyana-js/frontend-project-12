const apiPath = '/api/v1';

export default {
  loginPath: () => '/login',
  usersPath: () => [apiPath, 'data'].join('/'),
};