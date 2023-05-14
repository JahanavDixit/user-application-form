import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage2 } from '../../app/store';
import { Box, Card, CardBody, CardFooter, Image, Stack, Text, Divider, Heading } from '@chakra-ui/react';

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
            <Box p={4} borderWidth="1px" style={{ font: 'Inter' }} borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={2}>Quote of the day:</Text>
                <Text fontSize="lg" fontStyle="italic" mb={2}>"{pageTwoState.quote.content}"</Text>
                <Text fontWeight="bold">- {pageTwoState.quote.author}</Text>
            </Box>
            <Card maxW='lg'>
                <CardBody>
                    <Image
                        src={photoUrl}
                        alt='photo'
                        borderRadius='lg'
                        style={{ width: '200px', height: '200px' }}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{pageOneState.name}</Heading>
                        {pageOneState.add && <Text size='md'>Address:  {pageOneState.add}</Text>}
                        <Text size='md'>Phone Number:  {pageOneState.phone}</Text>
                        <Text size='md'>Email Address:  {pageOneState.email}</Text>
                        <Text size='md'>Date of Birth:  {pageTwoState.dob}</Text>
                        <Text size='md'>Gender:  {pageTwoState.gender}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                </CardFooter>
            </Card>
        </>
    );
};

export default DisplayPage;
