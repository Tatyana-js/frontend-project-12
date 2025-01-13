import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { activeChannelSelector } from '../store/activeChannelSlice.js';
import MessageForm from './MessageForm.jsx';
import useAuth from '../hooks/index.jsx';
import { useGetMessagesQuery, useAddMessageMutation } from '../api/chatApi.js';

const MessageField = () => {
  const { t } = useTranslation(); 
  const { data: messages = [], error, isLoading, refetch } =  useGetMessagesQuery();
  const [ addMessage ] = useAddMessageMutation();
  const activeChannel = useSelector(activeChannelSelector);
  const messagesEl = useRef(null);
  const { username } = useAuth();
  const countMessages = messages?.length || 0;
  console.log(messages);

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
      <div id="messages-box" className="chat-messages overflow-auto px-5 "ref={messagesEl}>
        {messages?.map(({ id, username, body}) => (
          <div key={id} className='text-break mb-2'>
            <b>{username}</b>
            {`: ${body}`}
          </div>
        ))}
      </div>
      <MessageForm 
        activeChannelId={activeChannel.id}
        username={username}
        addMessage={addMessage}
      />
    </div>
  );
};

export default MessageField;