import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardActionArea,
    CardContent,
} from '@mui/material';
import styles from './styles.module.scss';
import { cardData } from '../../constants/db/cards';

export const Cards = () => {
    return (
        <Box className={styles.cards}>
            <Box className={styles.titles}>
                <Typography variant="h4" className={styles.Typography1}>
                    Generate any type of content
                </Typography>
                <Typography variant="h4" className={styles.Typography2}>
                    10 times faster
                </Typography>
            </Box>
            <Card className={styles.cardsContainer}>
                {cardData.map((e: any) => (
                    <CardActionArea
                        key={e.id}
                        className={styles.CardActionArea}
                    >
                        <CardContent className={styles.CardContent}>
                            <Typography
                                color="white"
                                variant="h5"
                                className={styles.Typography3}
                            >
                                {e.title}
                            </Typography>
                            <br />
                            <Typography
                                color="#999"
                                className={styles.Typography4}
                            >
                                {e.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                ))}
            </Card>
        </Box>
    );
};
