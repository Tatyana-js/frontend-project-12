import { Dropdown } from "react-bootstrap";
import Channels from "../components/Сhannels";

export default {
    translation: {
      loginForm: {
        title: 'Войти',
        username: 'Ваш ник',
        password: 'Пароль',
        span: 'Нет аккаунта?',
        signUp: 'Регистрация',
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
      },
      modal: {
        name: 'Имя канала',
        addButton: 'Добавить канал',
        cancel: 'Отменить',
        send: 'Отправить',
        removeChannel: 'Удалить канал',
        removeText: 'Уверены?',
        removeButton: 'Удалить',
        schema: {
          required: 'Обязательное поле',
          minMax: 'От 3 до 20 символов',
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
      }
      // singUpForm: {
      //   username: ''
      // }
    }
  };