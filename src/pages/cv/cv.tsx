import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../../components';
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
} from '@mui/material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const CVPage = () => {
    const [age, setAge] = useState<string>('');
    const token = Cookies.get('access');
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent) =>
        setAge(event.target.value as string);

    useEffect(() => {
        if (!token) navigate('/');
    }, [token]);

    return (
        <Box className={styles.cv}>
            <Header />
            <Box className={styles.cvContainer}>
                <Box className={styles.cvCont}>
                    <Box className={styles.vacancyRequirement}>
                        <Typography variant="h4" className={styles.Typography}>
                            Vacancy requirement
                        </Typography>
                        <Box className={styles.twoTextField}>
                            <OutlinedInput
                                type="text"
                                color="secondary"
                                placeholder="Enter company name"
                                required
                                size="small"
                                className={styles.OutlinedInput}
                            />
                            <OutlinedInput
                                type="Email"
                                color="secondary"
                                placeholder="Enter position"
                                required
                                size="small"
                                className={styles.OutlinedInput}
                            />
                        </Box>
                        <TextareaAutosize
                            className={styles.TextareaAutosize}
                            placeholder="Enter vacancy requirement"
                            required
                            autoFocus={false}
                        />
                    </Box>
                    <Box className={styles.personalInformation}>
                        <Typography variant="h4" className={styles.Typography}>
                            Personal information
                        </Typography>
                        <Box className={styles.BoxPersonalInputs}>
                            <FormControl
                                className={styles.FormControlInputLabel}
                            >
                                <InputLabel
                                    className={styles.InputLabel}
                                    size="small"
                                >
                                    Grade
                                </InputLabel>
                                <Select
                                    color="secondary"
                                    size="small"
                                    label="Grade"
                                    displayEmpty
                                    className={styles.Select}
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem className={styles.MenuItem}>
                                        Specialist
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Manager
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Senior manager
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Head
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Director
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Executive
                                    </MenuItem>
                                    <MenuItem className={styles.MenuItem}>
                                        Other...
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <TextareaAutosize
                                className={styles.TextareaAutosize}
                                placeholder="Enter your skills"
                                required
                            />
                        </Box>
                        <TextareaAutosize
                            className={styles.TextareaAutosize}
                            placeholder="Enter summary about yourself, job experience, education, licenses & certifications..."
                            required
                        />
                        <Box className={styles.Buttons}>
                            <Button
                                className={styles.Button1}
                                variant="contained"
                            >
                                Get cover letter
                            </Button>
                            <Button
                                className={styles.Button2}
                                variant="contained"
                            >
                                Get CV
                            </Button>
                        </Box>
                    </Box>
                    <Box className={styles.result}>
                        <Typography variant="h4" className={styles.Typography}>
                            Result
                        </Typography>
                        <TextareaAutosize
                            className={styles.TextareaAutosize}
                            disabled
                        />
                        <Box className={styles.Box}>
                            <Button
                                variant="contained"
                                className={styles.Button}
                            >
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
