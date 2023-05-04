import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import './homepage.css'

const Homepage = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  return (
    <>
      <div className="form-container">
        <form>
          <div className="form-row">
            <label htmlFor="name">Name </label>
            <input {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}<br />
          </div>
          <div className="form-row">
            <label htmlFor="address">Address </label>
            <input type="tel" {...register('address')} />
            {errors.name && <span>This field is required</span>}<br />
          </div>
          <div className="form-row">
            <label htmlFor="number">Number </label>
            <input {...register('number', { required: true })} />
            {errors.name && <span>This field is required</span>}<br />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email </label>
            <input {...register('email')} />
            {errors.name && <span>This field is required</span>}<br />
          </div>
          <button>Next Page</button>
        </form>
      </div>
    </>
  );
}

export default Homepage;