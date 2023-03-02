import React from 'react';
import { Typography, Link } from '@mui/material';
import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography variant="h6" className={styles.Typography}>
                For partnership inquiries, <br /> please reach us at
            </Typography>
            <Link className={styles.email}>ulugbek@themagicai.com</Link>
        </footer>
    );
};
