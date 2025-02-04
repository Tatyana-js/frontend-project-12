import { exists } from "i18next";

export default {
    translation: {
      loginForm: {
        title: 'Войти',
        username: 'Ваш ник',
        password: 'Пароль',
        span: 'Нет аккаунта?',
        error: 'Неверное имя пользователя или пароль',
      },
      navBar: {
        title: 'Hexlet Chat',
        button: 'Выйти',
      },
      channels: {
        title: 'Каналы',
        setupChannel: 'Управление каналом',
        dropdownButtonRemove: 'Удалить',
        dropdownButtonRename: 'Переименовать',
        create: 'Канал создан',
        rename: 'Канал переименован',
        delete: 'Канал удалён',
      },
      modal: {
        name: 'Имя канала',
        addButton: 'Добавить канал',
        cancel: 'Отменить',
        send: 'Отправить',
        removeChannel: 'Удалить канал',
        removeText: 'Уверены?',
        removeButton: 'Удалить',
        renameChannel: 'Переименовать канал',
        schema: {
          required: 'Обязательное поле',
          minMax: 'От 3 до 20 символов',
          notOneOf: 'Должно быть уникальным',
        }
      },
      countMessages: {
        messages_one: '{{count}} сообщение',
        messages_few: '{{count}} сообщения',
        messages_many: '{{count}} сообщений',
      },
      isChannelsLoading: 'Loading...',
      formMesseges: {
        placeholder: 'Введите сообщение...',
        button: 'Отправить',
        input: 'Новое сообщение',
      },
      pageNotFound: 'Страница не найдена',
      redirect: 'Но вы можете перейти ',
      redirectOnMainPage: 'на главную страницу',
      signUpForm: {
        signUp: 'Регистрация',
        username: 'Имя пользователя',
        confirmPassword: 'Подтвердите пароль',
        invalidConfirmPassword: 'Пароли должны совпадать',
        signUpButton: 'Зарегистрироваться',
        minSymbolForPassword: 'Не менее 6 символов',
        oneOfPassword: 'Пароли должны совпадать',
        existsUser: 'Такой пользователь уже существует',
      }
    }
  };