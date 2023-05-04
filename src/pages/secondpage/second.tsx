
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';


const SecondPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        // Handle form submission
        setEmail(data.email);
        setPassword(data.password);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="dob">Email</label>
                <input {...register('dob', { required: true })} />
                {errors.email && <span>This field is required</span>}

                <label htmlFor="photo">Password</label>
                <input {...register('photo', { required: true })} />
                {errors.password && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default SecondPage;