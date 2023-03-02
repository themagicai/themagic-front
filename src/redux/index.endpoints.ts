import { authApi } from './auth/auth.api';
// import { cvApi } from "./cv/cv.api";

export const {
    useRegisterUsersMutation,
    useLoginUsersMutation,
    useLogoutUsersMutation,
} = authApi;

// export const { useCvOneQuery, useCvTwoQuery, useCvThreeQuery } = cvApi;
