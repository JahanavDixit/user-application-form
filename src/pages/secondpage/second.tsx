
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];


const SecondPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data: any) => {
        // Handle form submission
        setEmail(data.email);
        setPassword(data.password);
        navigate('/submit');
    };

    return (
        <>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-row'>
                    <label htmlFor="dob">Date Of Birth</label>
                    <input type="date" {...register('dob', { required: true })} />
                    {errors.dob && <span>This field is required</span>}
                </div>
                <div className='form-row'>
                    <label htmlFor="gender">Gender</label>
                    <div className='flex-container'>
                        {options.map((option) => (
                            <label key={option.value}>
                                <input
                                    name="gender"
                                    type="radio"
                                    value={option.value}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>
                <div className='form-row'>
                    <label htmlFor="photo">Upload Photo</label>
                    <input type="file"{...register('photo', { required: true })} />
                    {errors.photo && <span>This field is required</span>}
                </div>
                <div className='form-row'>
                    <button onClick={() => navigate('/')}> Previous Page </button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default SecondPage;