import React from 'react';

const Image = ({ id, type = 'image/webp' }) => {
  const srcStr = `${process.env.PUBLIC_URL}/images/${id}.webp`;
  const fallBack = `${process.env.PUBLIC_URL}/images/${id}.jpg}`;

  return (
    <picture>
      <source srcSet={srcStr} type={type} />
      <img src={fallBack} alt={id} />
    </picture>
  );
};

export default Image;
