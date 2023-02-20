import React from "react";
import "./styles.scss";
import { Typography, Card, CardActionArea, CardContent } from "@mui/material";

interface cardInfoTypes {
    id: number;
    title: string;
    desc: string;
}

const cardInfo: Array<cardInfoTypes> = [
    {
        id: 1,
        title: "Selling CV",
        desc: "Help to package your experience in a CV for your dream Job",
    },
    {
        id: 2,
        title: "Attractive Cover Letter",
        desc: "Writ e a best letter for the vacancy",
    },
    {
        id: 3,
        title: "LinkedIn profile",
        desc: "Boost your LinkedIn presence and increase job invitations",
    },
    {
        id: 4,
        title: "Prepare for an interview",
        desc: "Provide questions, act as an interviewer and correct errors",
    },
];

export const Cards = () => {
    return (
        <div className="cards">
            <div className="titles">
                <Typography variant="h4" className="Typography1">
                    Generate any type of content
                </Typography>
                <br />
                <Typography variant="h4" className="Typography2">
                    10 times faster
                </Typography>
            </div>
            <Card className="cards-container">
                {cardInfo.map((e: any) => (
                    <CardActionArea key={e.id} className="cards-area">
                        <CardContent>
                            <Typography
                                color="white"
                                variant="h5"
                                className="Typography1"
                            >
                                {e.title}
                            </Typography>
                            <br />
                            <Typography color="#999" className="Typography2">
                                {e.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                ))}
            </Card>
        </div>
    );
};
