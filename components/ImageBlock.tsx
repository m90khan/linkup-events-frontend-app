import { motion } from 'framer-motion';
import { FC } from 'react';
import Image from './Image';

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image id={id} />
    </motion.div>
  );
};
