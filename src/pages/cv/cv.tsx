import React, { useState } from "react";
import "./styles.scss";
import { Header, Footer } from "../../components";
import {
    Typography,
    FormControl,
    OutlinedInput,
    SelectChangeEvent,
    Button,
    Select,
    MenuItem,
} from "@mui/material";

export const CVPage = () => {
    const [age, setAge] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div className="cv">
            <Header />
            <div className="cv-container">
                <div className="cv-contain">
                    <div className="vacancy-requirement">
                        <Typography className="Typography" variant="h4">
                            Vacancy requirement
                        </Typography>
                        <br />
                        <div className="twoTextField">
                            <FormControl>
                                <OutlinedInput
                                    className="TextField"
                                    type="text"
                                    color="secondary"
                                    placeholder="Enter company name"
                                    required
                                    size="small"
                                />
                            </FormControl>
                            <FormControl>
                                <OutlinedInput
                                    className="TextField"
                                    type="Email"
                                    color="secondary"
                                    placeholder="Enter position"
                                    required
                                    size="small"
                                />
                            </FormControl>
                        </div>
                        <br />
                        <FormControl>
                            <OutlinedInput
                                className="TextFieldBig"
                                type="Email"
                                color="secondary"
                                placeholder="Enter summary about yourself, job experience, education, licenses & certifications..."
                                required
                                size="small"
                            />
                        </FormControl>
                    </div>
                    <br />
                    <div className="personal-information">
                        <Typography className="Typography" variant="h4">
                            Personal information
                        </Typography>
                        <div className="personalInputs">
                            <FormControl className="FormControlSelectInput">
                                <Select
                                    className="SelectInput"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    color="secondary"
                                    size="small"
                                >
                                    <MenuItem value="">Grade</MenuItem>
                                    <MenuItem className="MenuItem">
                                        One
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Two
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Three
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="FormControlSelectInput">
                                <OutlinedInput
                                    className="TextField"
                                    type="Email"
                                    color="secondary"
                                    placeholder="Enter vacancy requirement"
                                    required
                                    size="small"
                                />
                            </FormControl>
                        </div>
                        <FormControl>
                            <OutlinedInput
                                className="TextFieldBig"
                                type="Email"
                                color="secondary"
                                placeholder="Enter summary about yourself, job experience, education, licenses & certifications..."
                                required
                                size="small"
                            />
                        </FormControl>

                        <div className="Buttons">
                            <Button className="Button1" variant="contained">
                                Get cover letter
                            </Button>
                            <Button className="Button2" variant="contained">
                                Get CV
                            </Button>
                        </div>
                    </div>
                    <div className="result">
                        <Typography className="Typography" variant="h4">
                            Result
                        </Typography>
                        <FormControl>
                            <OutlinedInput
                                className="TextFieldBig"
                                type="Email"
                                color="secondary"
                                required
                                size="small"
                            />
                        </FormControl>

                        <div className="button">
                            <Button className="Button" variant="contained">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
