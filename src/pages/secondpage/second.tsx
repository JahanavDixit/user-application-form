
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


interface prop {
    gen: string,
    date: string,
    photo: any,
    quote: any,
    updatePage2: any
};

async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        const content: string = data.content;
        const author: string = data.author;
        return { content, author }
    } else {
        const content: string = "An error occured";
        return { content, data }
    }
}



const SecondPage = ({ gen, date, photo, quote, updatePage2 }: prop) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const quoteData = await updateQuote();
            quote = quoteData;
        }
        fetchData()
    }, [])

    const onSubmit = (data: any) => {
        date = data.dob.toString();
        photo = data.photo;
        console.log(photo)
        if (!(photo instanceof Blob)) {
            photo = new Blob([photo[0]], { type: 'image/jpeg' });
        }
        dispatch(updatePage2('photo', URL.createObjectURL(photo)))

        gen = data.gender;
        dispatch(updatePage2('dob', date));
        dispatch(updatePage2('gender', gen));
        dispatch(updatePage2('quote', quote));
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
                    <input type="file" accept="image/*" {...register('photo', { required: true })} />
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