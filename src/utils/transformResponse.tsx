import { Alert } from '@mui/material';
import Cookies from 'js-cookie';

export const transformResponse = (response: any) => {
    return (
        <Alert severity="success">
            This is a success alert — check it out! {response?.message}
        </Alert>
    );

    return response;
};

export const transformErrorResponse = (response: any) => {
    if (response.status === 403 || response.status === 500) {
        Cookies.remove('token');
    } else {
        console.log('RTK transformErrorResponse: ' + response?.data.message);
        return response;
    }
};
