import React, {useState} from 'react';

const useSearchForm = (callback) => {
  // handle inputs
  const [inputs, setInputs] = useState({});

  // handle submit
  const handleSubmit = (event) => {
      if (event) {
          event.preventDefault();
      }
      callback();
  }
  // onInput change
  const handleInputChange = (event) => {
  event.persist();
  setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
}
  return {
      handleInputChange,
      handleSubmit,
      inputs
  };
}
export default useSearchForm;