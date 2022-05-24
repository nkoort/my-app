import s from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  let textareaClass = s.formText + " " + (hasError ? s.error : '')
  return (
    <div className={s.form}>
      <div className={textareaClass}>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    let textareaClass = s.formText + " " + (hasError ? s.error : '')
    return (
      <div className={s.form}>
        <div className={textareaClass}>
          <input {...input} {...props} value={props.value}/>
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    );
};

export const InputEditor = (props) => {
   // debugger;
   const {input, meta, child, ...restProps} = props
   return (
      <div className={s.inputEditBlock}>
         <div className={s.nameEdit}>
            {`${props.inputName}: `}
         </div>
         <div className={s.inputEdit}>
            <input {...meta} onChange={props.input.onChange} className={s.inputEditText}/>
         </div>
      </div>
      
   )
}

export const InputEdit = (props) => {
   // debugger;
   const {input, meta, child, inputName} = props
   return (
      <div className={s.inputEditBlock}>
         <div className={s.nameEdit}>
            {`${props.inputName}: `}
         </div>
         <div className={s.inputEdit}>
            <input {...meta} {...input} className={s.inputEditText}/>
         </div>
      </div>
   )
}

export const CheckBoxEditor = (props) => {
   // debugger;
   const {input, meta, child, inputName} = props
   return (
      <div>
         <div>{inputName}</div>
         <input type='checkbox' {...input} {...meta} checked={input.value}/>
      </div>
   )
}
