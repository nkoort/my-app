import style from './Messages.module.css';


const Message = (props) => {
  const typeClass = function typeFunc () {
    if (props.type == 'my') {
      let clas = style.my
      return clas
    } else {
      let clas = style.comp
      return clas;
    }
  }
  return (
    <div className={`${style.message} ${typeClass()}`}>
      <div className={style.photo}>
        <img src="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true" alt="" />
      </div>
      <div className={style.text}>{props.message}</div>
    </div>
  );
};

export default Message;