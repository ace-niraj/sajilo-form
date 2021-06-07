import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import TextFieldWrapper from '../FormUi/TextFieldWrapper';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import { Purpose, Relation } from './Steptwo_data';
import SelectFieldWrapper from '../FormUi/SelectFieldWrapper';

const Steptwo = ({ next, prev, data, validate }) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get('https://remittance.sajilopay.com.np/api/bmt/balance/')
      .then(res => {
        setDetail(res.data.data.user_kyc);
      })
      .catch(err => err.message);
  }, []);
  const handleSubmit = values => {
    values.sender = detail;
    next(values, true);
  };

  return (
    <>
      <h1>Step two</h1>
      <Formik
        initialValues={data}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Grid container direction='column' spacing={2}>
              <Grid xs={6} item>
                <TextFieldWrapper name='receiver_name' label='Receiver Name' />
              </Grid>
              <Grid xs={6} item>
                <TextFieldWrapper
                  name='receiver_address'
                  label='Receiver Address'
                />
              </Grid>
              <Grid xs={6} item>
                <TextFieldWrapper
                  name='receiver_number'
                  label='Receiver Number'
                />
              </Grid>
              <Grid xs={6} item>
                <SelectFieldWrapper
                  name='relation'
                  label='Select Relation'
                  options={Relation}
                />
              </Grid>
              <Grid xs={6} item>
                <SelectFieldWrapper
                  name='purpose'
                  label='Select Purpose'
                  options={Purpose}
                />
              </Grid>

              <Grid xs={6} item>
                <Button
                  style={{ marginRight: '20px' }}
                  variant='contained'
                  onClick={() => prev(values)}
                  type='button'
                >
                  Back
                </Button>
                <Button variant='contained' type='submit'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Steptwo;
