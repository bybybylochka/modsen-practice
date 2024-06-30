import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: darkseagreen;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const DogImage = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setImageUrl(data.message);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDogImage();
    }, []);

    return (
        <Container>
            {imageUrl && (
                <Image src={imageUrl} alt="Random dog photo" />
            )}
        </Container>
    );
};

export default DogImage;