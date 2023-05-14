import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { InputGroup, Input, InputLeftAddon } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import './homepage.css';

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
            <InputGroup size='sm'>
              <InputLeftAddon children='Name :' />
              <Input
                {...register('name', { required: true, pattern: /^[a-zA-Z\s]*$/ })}
                size='sm'
              />
              {errors.name && <p>Name is required and should only contain letters and spaces.</p>}
            </InputGroup>
          </div>
          <div className="form-row">
            <InputGroup size='sm'>
              <InputLeftAddon children='Address :' />
              <Input
                {...register('address')}
                size='sm'
              />
            </InputGroup>
          </div>
          <div className="form-row">
            <InputGroup size='sm'>
              <InputLeftAddon children='Phone Number :' />
              <Input
                {...register('number', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                size='sm'
              />
            </InputGroup>
            {errors.number && <p>Phone Number is required and must be in valid format.</p>}
          </div>
          <div className="form-row">
            <InputGroup size='sm'>
              <InputLeftAddon children='Email :' />
              <Input
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                size='sm'
              />
            </InputGroup>
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <button type="submit">Next Page</button>
        </form>
      </div>
    </>
  );
};

export default Homepage;
