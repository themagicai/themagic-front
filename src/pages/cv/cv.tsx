import React, { useState } from 'react';
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
import styles from './styles.module.scss';

export const CVPage = () => {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) =>
        setAge(event.target.value as string);

    return (
        <Box className={styles.cv}>
            <Header />
            <Box className={styles.cvContainer}>
                <Box className={styles.cvCont}>
                    <Box className={styles.vacancyRequirement}>
                        <Typography className={styles.Typography} variant="h4">
                            Vacancy requirement
                        </Typography>
                        <Box className={styles.twoTextField}>
                            <OutlinedInput
                                className={styles.TextField}
                                type="text"
                                color="secondary"
                                placeholder="Enter company name"
                                required
                                size="small"
                            />
                            <OutlinedInput
                                className={styles.TextField}
                                type="Email"
                                color="secondary"
                                placeholder="Enter position"
                                required
                                size="small"
                            />
                        </Box>
                        <TextareaAutosize
                            className={styles.TextFieldBig}
                            placeholder="Enter vacancy requirement"
                            required
                        />
                    </Box>
                    <Box className={styles.personalInformation}>
                        <Typography className={styles.Typography} variant="h4">
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
                                    className={styles.Select}
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    color="secondary"
                                    size="small"
                                    label="Grade"
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
                                maxRows={3}
                                className={styles.TextareaAutosize}
                                placeholder="Enter your skills"
                                required
                                color="secondary"
                            />
                        </Box>
                        <TextareaAutosize
                            className={styles.TextFieldBig}
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
                        <Typography className={styles.Typography} variant="h4">
                            Result
                        </Typography>
                        <TextareaAutosize
                            className={styles.TextFieldBig}
                            // placeholder=""
                            // required
                        />
                        <Box className={styles.Box}>
                            <Button
                                className={styles.Button}
                                variant="contained"
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
