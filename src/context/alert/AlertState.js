import React, {useReducer} from 'react'
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SHOW_ALERT, REMOVE_ALERT} from '../Type';


  const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg, msgtype) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {msg, msgtype}
    });
    setTimeout(()=>dispatch({
        type: REMOVE_ALERT
      })
    , 5000);
  }
 
  return (
    <AlertContext.Provider value = {{
      alert:state,
      showAlert
    }} >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;