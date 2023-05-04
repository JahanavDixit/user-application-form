import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../app/store';

const DisplayPage: React.FC = () => {
    const pageOneState = useSelector((state: store) => state.pageone);
    const pageTwoState = useSelector((state: store) => state.pagetwo);

    return (
        <>
            <h2>Display Page</h2>
            <h3>Page One Fields:</h3>
            <p>Name: {pageOneState.name}</p>
            <p>Address: {pageOneState.address}</p>
            <p>Phone Number: {pageOneState.phoneNumber}</p>
            <p>Email Address: {pageOneState.emailAddress}</p>

            <h3>Page Two Fields:</h3>
            <p>Date of Birth: {pageTwoState.dateOfBirth}</p>
            <p>Gender: {pageTwoState.gender}</p>
            <p>Photo: {pageTwoState.photo}</p>
        </>
    );
};

export default DisplayPage;
