import React, {useEffect} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./RequestsAPI";

const Request = () => {

  useEffect(() => {
    RequestsAPI.createResponse(true).then(res=> console.log(res.data))
  }, [])
  return (
    <div>
      <SuperButton>SEND</SuperButton>
      <SuperCheckbox/>
    </div>
  );
};

export default Request;