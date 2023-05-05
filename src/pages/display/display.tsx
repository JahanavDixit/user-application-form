import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage2 } from '../../app/store';

async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        const content: string = data.content;
        const author: string = data.author;
        return { content, author }
    } else {
        const content: string = "An error occured";
        return { content, data }
    }
}


const DisplayPage: React.FC = (quote) => {
    const pageOneState = useSelector((state: any) => state.form.page1);
    const pageTwoState = useSelector((state: any) => state.form.page2);
    const dispatch = useDispatch();
    const quoteRef = useRef({});
    const photoUrl = pageTwoState.photo;
    useEffect(() => {
        async function fetchData() {
            const quoteData = await updateQuote();
            quoteRef.current = quoteData;
            if (pageTwoState.quote === '')
                dispatch(updatePage2('quote', quoteRef));
        }
        fetchData()
    },)
    return (
        <>
            <h2>Display Page</h2>
            <h3>Quote  : </h3> <i>{pageTwoState.quote.content}
                - {pageTwoState.quote.author}</i> <br /> <br />
            <img src={photoUrl} alt="uploaded" style={{ width: '200px', height: '200px' }} />
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
