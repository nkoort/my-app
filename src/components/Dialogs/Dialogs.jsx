import React from 'react';
import DialogsItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css';
import Message from './Messages/Messages';
import { TextAreaForm } from './Textarea/TextArea';


const Dialogs = (props) => {
  let messages = props.messages.map((message) => <Message
    message={message.message} type={message.type} />);
  let dialogs = props.dialogs.map((dialog) => <DialogsItem
    id={dialog.id} name={dialog.name} img={dialog.img} />);
  const newMessage = (formData) => {
    props.addMessage(formData.textarea)
  }


  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogs}
      </div>
      <div className={style.messages}>
        <div className={style.messBlock}>
          {messages}
        </div>
        <TextAreaForm onSubmit={newMessage} />
      </div>
    </div>
  );
};

export default Dialogs;