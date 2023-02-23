import axios from "axios";
import { AppDispatch } from "..";
import { API } from "../../api";
import { userActions } from "../slices/userSlice";

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.localStorage.removeItem("user");
        }
        if (error.response.status === 403) {
            refreshToken();
            console.log(`403 error`);
        }
    }
);

const refreshToken = () => {
    const refresh = restoreAuthToken();
    axios
        .post(`${API}/auth/refresh`, {
            refresh,
        })
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
};

const setHeaderToken = (accessToken: string) =>
    axios.interceptors.request.use(
        (config: any) => {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

const restoreAuthToken = () => {
    const authToken = window.localStorage.getItem("user");
    if (!authToken) {
        return null;
    }
    try {
        return JSON.parse(authToken);
    } catch (error) {
        return null;
    }
};

export const restoreAuth = () => async (dispatch: AppDispatch) => {
    const authToken = restoreAuthToken();

    if (authToken) {
        dispatch(userActions.loginSuccess(authToken));
        setHeaderToken(authToken.access);
    }
};

export const createAccount =
    (userData: any) => async (dispatch: AppDispatch) => {
        dispatch(userActions.signUpRequest());
        try {
            const response = await axios.post(`${API}/auth/sign_up`, userData);
            console.log(response);
            dispatch(userActions.signUpSuccess());
        } catch (error) {
            dispatch(userActions.signUpFailed());
        }
    };
