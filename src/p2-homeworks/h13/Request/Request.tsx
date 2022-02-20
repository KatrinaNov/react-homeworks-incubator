import React, {useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./RequestsAPI";

const Request = () => {
  const [message, setMessage] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const sendRequest = () => {
    RequestsAPI.createResponse(checked)
      .then(res => {
        console.log(res.data)
        setMessage(res.data.errorText)
      })
      .catch(error => {
        console.log({...error});
        setMessage(error.response ? error.response.data.errorText : error.message);
      })
  }

  const onChangeHandler = () => setChecked(!checked)

  return (
    <div>
      <SuperCheckbox checked={checked} onChange={onChangeHandler}/>
      <SuperButton onClick={sendRequest}>SEND</SuperButton>
      <div>{message}</div>
    </div>
  );
};

export default Request;