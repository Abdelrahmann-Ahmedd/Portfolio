import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Error() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212529',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontSize: '8rem', marginBottom: '0.5rem',color:"rgb(201, 169, 63)" }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem',color:"rgb(201, 169, 63)" }}>Page Not Found</h2>
      <p style={{ maxWidth: '400px', fontSize: '1.2rem', opacity: 0.75 }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
    </motion.div>
  );
}
