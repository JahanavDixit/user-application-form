import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';

const DisplayPage: React.FC = () => {
    const pageOneState = useSelector((state: any) => state.form.page1);
    const pageTwoState = useSelector((state: any) => state.form.page2);
    console.log(pageOneState);
    console.log(pageTwoState);
    return (
        <>
            <h2>Quote : </h2>
            <p>QQuote goes here</p>
            <h3>Display Page</h3>
            <p>Name:  {pageOneState.name}</p>
            <p>Address:  {pageOneState.add}</p>
            <p>Phone Number:  {pageOneState.phone}</p>
            <p>Email Address:  {pageOneState.email}</p>
            <p>Date of Birth:  {pageTwoState.dob}</p>
            <p>Gender:  {pageTwoState.gender}</p>
        </>
    );
};

export default DisplayPage;
