
import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { FieldValue, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePage2 } from '../../app/store';
//import { Link } from 'react-router-dom';

interface prop {
    gen: string,
    date: string,
    photo: any,
    updatePage2: any
};


const SecondPage = ({ gen, date, photo, updatePage2 }: prop) => {
    // const [gen, setgender] = useState('');
    // const [date, setdate] = useState('');
    // const [photo, setphoto] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        date = data.dob.toString();
        //photo = data.photo
        gen = data.gender;
        dispatch(updatePage2('dob', date));
        //dispatch(updatePage2('photo', photo));
        dispatch(updatePage2('gender', gen));
        navigate('/display');
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
                        <select {...register('gender', { required: true })}>
                            <option value="" placeholder='Select Gender' >Select Gender </option>
                            <option value="Male" placeholder='Male'>Male </option>
                            <option value="Female" placeholder='Female'>Female </option>
                            <option value="Other" placeholder='Other'>Other </option>
                        </select>
                    </div>

                </div>
                <div className='form-row'>
                    <label htmlFor="photo">Upload Photo</label>
                    <input type="file" {...register('photo', { required: true })} />
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