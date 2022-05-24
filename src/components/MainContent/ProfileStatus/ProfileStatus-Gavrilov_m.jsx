import React, {useEffect, useState, useMemo } from 'react';
import Preloader from '../../Common/Preloader/preloader';
import style from "./ProfileStatus.module.css";



// class ProfileStatus extends React.Component {
//   componentDidUpdate (prevProps, prevState) {
//     if (prevProps.status != this.props.status) {
//       this.setState({
//         status: this.props.status
//       });
//     }
//   }
//   state = {
//     editEmode: false,
//     status : this.props.status,
//   }
//   activateEditMode = () => {
//     this.setState({
//       editEmode: true
//     });
//   }
//   deactivateEditMode = () => {
//     this.setState({
//       editEmode: false
//     });
//     this.props.updateStatus(this.state.status);
//   }
//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     })
//   };
// }


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status); 

  useEffect ( () => {
    setStatus(props.status);
  }, [props.status] );

  // let [some1, someChange] = useState(['some value', 'two value']);
  // const change = () => {
  //   someChange(some1[4] = 'tree')
  //   someChange(some1[0] = 'good job')
  // }
  // change();
  // console.log(some1);
  // debugger;

  const activEditMode = () => {
    if (props.id === props.idMe) {
      setEditMode(true);
    }
  };
  const deactivEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
  
  // console.log(status + " " + editMode);
  // const renderMemo = useMemo ( () => {
  //   // debugger;
  //   return (
  //     <div className={style.status}>
  //     {!editMode &&
  //       <div className={style.status}>
  //         <span 
  //           onDoubleClick={ activEditMode } 
  //           className={style.spanItem}>
  //             {props.status || '----'}
  //         </span>
  //       </div>
  //     }
  //     {editMode &&
  //       <div className={style.status}>
  //         <input 
  //           className={style.inputItem} 
  //           autoFocus 
  //           onChange={ onStatusChange} 
  //           onBlur={ deactivEditMode } 
  //           value={ status } />
  //       </div>
  //     }
  //   </div>
  //   )
  // },[status, editMode])
  // return (
  //   <div>
  //     {renderMemo}
  //   </div>
  // );

  
    return (
      <div className={style.status}>
      {!editMode &&
        <div className={style.status}>
          <span 
            onDoubleClick={ activEditMode } 
            className={style.spanItem}>
              {props.status || '----'}
          </span>
        </div>
      }
      {editMode &&
        <div className={style.status}>
          <input 
            className={style.inputItem} 
            autoFocus 
            onChange={ onStatusChange} 
            onBlur={ deactivEditMode } 
            value={ status } />
        </div>
      }
    </div>
    )
}



export default ProfileStatus;
