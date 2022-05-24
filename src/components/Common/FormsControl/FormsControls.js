import style from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  let textareaClass = style.formText + " " + (hasError ? style.error : '')
  return (
    <div className={style.form}>
      <div className={textareaClass}>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    let textareaClass = style.formText + " " + (hasError ? style.error : '')
    return (
      <div className={style.form}>
        <div className={textareaClass}>
          <input {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    );
};