import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { activeChannelSelector } from '../store/activeChannelSlice.js';
import MessageForm from './MessageForm.jsx';
import { useGetMessagesQuery } from '../api/chatApi.js';

const MessageField = () => {
    const { t } = useTranslation(); 
  const { data, error, isLoading, refetch } =  useGetMessagesQuery();
  const activeChannel = useSelector(activeChannelSelector);
  const dispatch = useDispatch();
  const messages = data;
  const countMessages = messages?.length || 0;
  console.log(messages)

  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b># {activeChannel.name}</b>
        </p>
        <span className="text-muted">
          {t('countMessages.messages', { count: countMessages })}
        </span>
      </div>
      <div id="messages-box" className="chat-messages overflow-auto px-5 ">{messages}</div>
      <MessageForm />
    </div>
  );
};

export default MessageField;