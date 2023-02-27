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
    TextareaAutosize,
} from "@mui/material";

export const CVPage = () => {
    const [age, setAge] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) =>
        setAge(event.target.value as string);

    return (
        <Box className="cv">
            <Header />
            <Box className="cv-container">
                <Box className="cv-contain">
                    <Box className="vacancy-requirement">
                        <Typography className="Typography" variant="h4">
                            Vacancy requirement
                        </Typography>
                        <Box className="twoTextField">
                            <FormControl className="FormControl">
                                <OutlinedInput
                                    className="TextField"
                                    type="text"
                                    color="secondary"
                                    placeholder="Enter company name"
                                    required
                                    size="small"
                                />
                            </FormControl>
                            <FormControl className="FormControl">
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
                        <FormControl>
                            <OutlinedInput
                                className="TextFieldBig"
                                color="secondary"
                                placeholder="Enter vacancy requirement"
                                required
                            />
                        </FormControl>
                    </Box>
                    <Box className="personal-information">
                        <Typography className="Typography" variant="h4">
                            Personal information
                        </Typography>
                        <Box className="BoxPersonalInputs">
                            <FormControl className="FormControlInputLabel">
                                <InputLabel className="InputLabel" size="small">
                                    Grade
                                </InputLabel>
                                <Select
                                    className="Select"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    color="secondary"
                                    size="small"
                                    label="Grade"
                                >
                                    <MenuItem className="MenuItem">
                                        Specialist
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Manager
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Senior manager
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Head
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Director
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Executive
                                    </MenuItem>
                                    <MenuItem className="MenuItem">
                                        Other...
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="FormControlTextareaAutosize">
                                <TextareaAutosize
                                    maxRows={3}
                                    className="TextareaAutosize"
                                    placeholder="Enter your skills"
                                    required
                                />
                            </FormControl>
                        </Box>
                        <FormControl className="FormControlOutlinedInput">
                            <OutlinedInput
                                className="TextFieldBig"
                                placeholder="Enter summary about yourself, job experience, education, licenses & certifications..."
                                color="secondary"
                                required
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
                        <FormControl className="FormControlOutlinedInput">
                            <OutlinedInput
                                className="TextFieldBig"
                                placeholder=""
                                color="secondary"
                                required
                            />
                        </FormControl>
                        <Box className="Box">
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
