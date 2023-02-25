import React, { useState } from "react";
import "./styles.scss";
import { Header, Footer } from "../../components";
import {
    Box,
    Typography,
    FormControl,
    OutlinedInput,
    SelectChangeEvent,
    Button,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";

export const CVPage = () => {
    const [age, setAge] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box className="cv">
            <Header />
            <Box className="cv-container">
                <Box className="cv-contain">
                    <Box className="vacancy-requirement">
                        <Typography className="Typography" variant="h4">
                            Vacancy requirement
                        </Typography>
                        <br />
                        <Box className="twoTextField">
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
                        </Box>
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
                    </Box>
                    <br />
                    <Box className="personal-information">
                        <Typography className="Typography" variant="h4">
                            Personal information
                        </Typography>
                        <Box className="personalInputs">
                            <FormControl className="FormControlSelectInput">
                                <InputLabel className="InputLabel" size="small">
                                    Grade
                                </InputLabel>
                                <Select
                                    className="SelectInput"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    color="secondary"
                                    size="small"
                                    label="Grade"
                                >
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
                        </Box>
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

                        <Box className="Buttons">
                            <Button className="Button1" variant="contained">
                                Get cover letter
                            </Button>
                            <Button className="Button2" variant="contained">
                                Get CV
                            </Button>
                        </Box>
                    </Box>
                    <Box className="result">
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

                        <Box className="button">
                            <Button className="Button" variant="contained">
                                Download
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};
