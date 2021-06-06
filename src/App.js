import React, { useState, useEffect } from 'react';
import Stepone from './components/Stepone';
import Steptwo from './components/Steptwo';
import Finalstep from './components/Finalstep';
import axios from 'axios';
import * as Yup from 'yup';

const App = () => {
  const [userInput, setUserInput] = useState({
    payout_district: '',
    select_agent: '',
    amount: 0,
    charge: 0,
    total: 0,
    receiver_name: '',
    receiver_address: '',
    receiver_number: '',
    relation: '',
    purpose: '',
    sender: {},
  });
  const validateOne = Yup.object().shape({
    payout_district: Yup.string().required('This field is required'),
    select_agent: Yup.array().required('This field is required'),
    amount: Yup.number().required('This field is required'),
  });
  const validateTwo = Yup.object().shape({
    receiver_name: Yup.string()
      .required('This field is required')
      .min(7, 'Enter Full Name'),
    receiver_address: Yup.string().required('This field is required'),
    receiver_number: Yup.string()
      .required('This field is required')
      .max(10, 'Enter valid number')
      .min(10, 'Enter valid number'),
    relation: Yup.string().required('Please select relation'),
    purpose: Yup.string().required('Please select remitance purpose'),
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState();
  const makeapirequest = formdata => {
    axios
      .post('http://192.168.190.128:8000/api/bmt/execute/', formdata)
      .then(res => {
        //console.log(res.data.message);
        setSuccess(res.data.message);
      });

    console.log('Form submitted', formdata);
  };
  const handleNext = (newData, final = false) => {
    setUserInput(prev => ({ ...prev, ...newData }));

    if (final) {
      makeapirequest(newData);
    }

    setCurrentStep(prev => prev + 1);
  };
  const handlePrevious = newData => {
    setUserInput(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };
  console.log(success);
  const steps = [
    <Stepone data={userInput} validate={validateOne} next={handleNext} />,
    <Steptwo
      data={userInput}
      validate={validateTwo}
      prev={handlePrevious}
      next={handleNext}
    />,
    <Finalstep success={success} />,
  ];

  return <>{steps[currentStep]}</>;
};

export default App;
