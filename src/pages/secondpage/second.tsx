
import React, { useEffect, useRef } from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react';
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
    const quoteRef = useRef({});
    useEffect(() => {
        async function fetchData() {
            const quoteData = await updateQuote();
            quoteRef.current = quoteData;
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
        dispatch(updatePage2('quote', quoteRef.current));
        navigate('/display');
    };

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-row'>
                        <InputGroup size='sm'>
                            <InputLeftAddon children='Date of Birth :' />
                            <Input
                                placeholder="Select Date and Time"
                                type="date"
                                {...register('dob', { required: true })}
                                size="sm"
                            />
                            {errors.dob && <span>This field is required</span>}
                        </InputGroup>
                    </div>
                    <div className='form-row'>
                        <InputGroup size='sm'>
                            <InputLeftAddon children='Gender :' />
                            <Select variant='outline' placeholder='Select option' {...register('gender', { required: true })}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Other'>Other</option>
                            </Select>
                        </InputGroup>
                    </div>
                    <div className='form-row'>
                        <InputGroup size='sm'>
                            <InputLeftAddon children='Photo :' />
                            <Input type="file" accept="image/*" {...register('photo', { required: true })} />
                            {errors.photo && <span>This field is required</span>}
                        </InputGroup>
                    </div>
                    <div className='form-row'>
                        <button onClick={() => navigate('/')}> Previous Page </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SecondPage;