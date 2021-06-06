import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Grid, Typography } from '@material-ui/core';
import TextFieldWrapper from './FormUi/TextFieldWrapper';
import SelectFieldWrapper from './FormUi/SelectFieldWrapper';
import axios from 'axios';

const Stepone = ({ next, data, validate }) => {
  const [district, setDistrict] = useState([]);
  const [searchDistrict, setsearchDistrict] = useState(data.payout_district);
  const [agent, setAgent] = useState([data.select_agent]);
  const [amount, setAmount] = useState(data.amount);
  const [total, setTotal] = useState(data.total);
  const [move, setMove] = useState(false);

  useEffect(() => {
    axios
      .get('https://remittance.sajilopay.com.np/api/bmt/district/')
      .then(res => {
        setDistrict(res.data.district);
      })
      .catch(err => err.message);
  }, []);
  useEffect(() => {
    axios
      .get('https://remittance.sajilopay.com.np/api/bmt/agent/')
      .then(res => {
        const val = res.data.agent;
        val.map(el => {
          if (el[el.length - 1] === searchDistrict) {
            setAgent(prev => [...prev, el]);
          }
        });
      })
      .catch(err => err.message);
  }, [searchDistrict]);

  useEffect(() => {
    let senderMoney = parseInt(amount, 10);
    let chargeAmount = (senderMoney / 100) * 10;
    let totalAmount = senderMoney + chargeAmount;
    setTotal(totalAmount);
    axios
      .get('https://remittance.sajilopay.com.np/api/bmt/balance/')
      .then(res => {
        if (res.data.data.wallet.balance >= totalAmount && totalAmount > 0) {
          setMove(true);
        } else {
          setMove(false);
        }
      })
      .catch(err => err.message);
  }, [amount]);
  const handleAmount = e => {
    const re = /^[0-9]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };
  const handleSubmit = values => {
    values.amount = amount;
    values.total = total;
    values.charge = total - amount;
    next(values);
  };
  return (
    <>
      <h1>Step one</h1>
      <Formik
        initialValues={data}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container direction='column' spacing={2}>
            <Grid xs={6} item>
              <SelectFieldWrapper
                name='payout_district'
                label='Select District'
                options={district}
                searchDistrict={searchDistrict}
                setsearchDistrict={setsearchDistrict}
              />
            </Grid>
            {searchDistrict === '' ? (
              <Grid xs={6} item>
                <SelectFieldWrapper
                  name='select_agent'
                  label='Select Agent'
                  options={agent}
                  disabled
                />
              </Grid>
            ) : (
              <Grid xs={6} item>
                <SelectFieldWrapper
                  name='select_agent'
                  label='Select Agent'
                  options={agent}
                />
              </Grid>
            )}

            <Grid xs={6} item>
              <TextFieldWrapper
                value={amount}
                onChange={handleAmount}
                name='amount'
                type='number'
                label='Amount'
              />
            </Grid>
            <Grid xs={6} item>
              <TextFieldWrapper
                value={total - amount}
                name='charge'
                label='Charge'
                disabled
              />
            </Grid>
            <Grid xs={6} item>
              <TextFieldWrapper
                value={total}
                name='total'
                label='Total'
                disabled
              />
            </Grid>
            {move === true || total === 0 ? (
              ''
            ) : (
              <Typography color='secondary'>Insufficient Balance</Typography>
            )}
            <Grid xs={6} item>
              <Button
                disabled={!move}
                variant='contained'
                color='secondary'
                type='submit'
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default Stepone;
