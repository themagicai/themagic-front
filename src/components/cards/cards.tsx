import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardActionArea,
    CardContent,
} from '@mui/material';
import styles from './styles.module.scss';

interface cardDataTypes {
    id: number;
    title: string;
    desc: string;
}

const cardData: Array<cardDataTypes> = [
    {
        id: 1,
        title: 'Selling CV',
        desc: 'Help to package your experience in a CV for your dream Job',
    },
    {
        id: 2,
        title: 'Attractive Cover Letter',
        desc: 'Writ e a best letter for the vacancy',
    },
    {
        id: 3,
        title: 'LinkedIn profile',
        desc: 'Boost your LinkedIn presence and increase job invitations',
    },
    {
        id: 4,
        title: 'Prepare for an interview',
        desc: 'Provide questions, act as an interviewer and correct errors',
    },
];

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
