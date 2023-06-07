import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { CircularProgress } from '@mui/material';

const LoaderContainer = styled('div')`
  width: 100px;
  height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

const LoaderImage = styled('div')`
  width: 100px;
  height: 160px;
  font-size: 40px;
  text-align: center;
  transform-origin: bottom center;
  animation: 3s rotate infinite;
  opacity: 0;
`;

const LoaderSpan = styled('span')`
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
`;

const StartingLoader = () => {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter === 9 ? 0 : prevCounter + 1));
    }, 3000);

    loading();

    return () => clearInterval(interval);
  }, []);

  const changeImage = (counter) => {
    const images = [
      '<i class="fa fa-fighter-jet"></i>',
      '<i class="fa fa-gamepad"></i>',
      '<i class="fa fa-headphones"></i>',
      '<i class="fa fa-cubes"></i>',
      '<i class="fa fa-paw"></i>',
      '<i class="fa fa-rocket"></i>',
      '<i class="fa fa-ticket"></i>',
      '<i class="fa fa-pie-chart"></i>',
      '<i class="fa fa-codepen"></i>'
    ];

    // Return the appropriate JSX for the image
    return (
      <LoaderImage>
        <span dangerouslySetInnerHTML={{ __html: images[counter] }} />
      </LoaderImage>
    );
  };

  const loading = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setNum(i);
        if (i === 100) {
          loading();
        }
      }, i * 120);
    }
  };

  return (
    <LoaderContainer>
      {changeImage(counter)}
      <LoaderSpan>{`${num}%`}</LoaderSpan>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default StartingLoader;
