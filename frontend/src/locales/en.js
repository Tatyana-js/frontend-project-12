import { exists } from "i18next";

export default {
  translation: {
    loginForm: {
      title: 'Login',
      username: 'Your nickname',
      password: 'Password',
      span: 'Don\'t have an account?',
      error: 'Incorrect username or password',
    },
    navBar: {
      title: 'Hexlet Chat',
      button: 'Logout',
    },
    channels: {
      title: 'Channels',
      setupChannel: 'Manage channel',
      dropdownButtonRemove: 'Delete',
      dropdownButtonRename: 'Rename',
      create: 'Channel created',
      rename: 'Channel renamed',
      delete: 'Channel deleted',
    },
    modal: {
      name: 'Channel Name',
      addButton: 'Add Channel',
      cancel: 'Cancel',
      send: 'Send',
      removeChannel: 'Remove Channel',
      removeText: 'Are you sure?',
      removeButton: 'Remove',
      renameChannel: 'Rename Channel',
      schema: {
        required: 'Required field',
        minMax: '3 to 20 characters',
        notOneOf: 'Must be unique',
      }
    },
    countMessages: {
      messages_one: '{{count}} message',
      messages_few: '{{count}} messages',
      messages_many: '{{count}} messages',
    },
    isChannelsLoading: 'Loading...',
    formMesseges: {
      placeholder: 'Enter a message...',
      button: 'Submit',
      input: 'New message',
    },
    errors: {
      axiosError: 'Connection error',
      pageNotFound: 'Page not found',
    },
    redirect: 'But you can go to ',
    redirectOnMainPage: 'the main page',
    signUpForm: {
      signUp: 'Register',
      username: 'Username',
      confirmPassword: 'Confirm password',
      invalidConfirmPassword: 'Passwords must match',
      signUpButton: 'Register',
      minSymbolForPassword: 'At least 6 characters',
      oneOfPassword: 'Passwords must match',
      existsUser: 'This user already exists',
    }
  }
};