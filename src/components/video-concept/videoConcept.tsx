import React from 'react';
import { Box } from '@mui/system';
import Arrows from '../../assets/images/arrow.png';
import styles from './styles.module.scss';

export const VideoConcept = () => {
    return (
        <Box className={styles.video}>
            <Box className={styles.Box}>
                <Box className={styles.title}>
                    <h1>How to use</h1>
                    <img src={Arrows} alt="arrow" />
                </Box>
                <iframe src="" allowFullScreen></iframe>
            </Box>
        </Box>
    );
};
