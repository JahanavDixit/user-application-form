import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import './homepage.css';

import { store, updatePage1 } from '../../app/store';

const page: string = 'page1';

interface FormData {
  name: string;
  address: string;
  number: string;
  email: string;
}

const Homepage = ({ name, add, mail, phone, updatePage1 }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    name = data.name;
    add = data.address
    mail = data.email
    phone = data.number
    dispatch(updatePage1('name', name));
    dispatch(updatePage1('add', add));
    dispatch(updatePage1('email', mail));
    dispatch(updatePage1('phone', phone));
    navigate('/second', { state: data });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name* </label>
            <input type="text" {...register('name', { required: true, pattern: /^[a-zA-Z\s]*$/ })} />
            {errors.name && <p>Name is required and should only contain letters and spaces.</p>}
          </div>
          <div className="form-row">
            <label htmlFor="address">Address </label>
            <input type="text" {...register('address')} />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="form-row">
            <label htmlFor="number">Number* </label>
            <input
              type="number"
              {...register('number', {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.number && <p>Phone Number is required and must be in valid format.</p>}
          </div>
          <div className="form-row">
            <label htmlFor="email">Email* </label>
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className='form-row'>* fields are mandatory </div>
          <button type="submit">Next Page</button>
        </form>
      </div>
    </>
  );
};

export default Homepage;
