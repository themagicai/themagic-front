import { api } from '../index.api';
import {
    VacancyRequirementTypes,
    PersonalInformationTypes,
    ResultTypes,
} from './cv.types';
import {
    transformResponse,
    transformErrorResponse,
} from '../../utils/transformResponse';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        cvResult: builder.mutation<ResultTypes, any>({
            query: (body) => ({
                url: 'api/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['auth'],
            transformResponse,
            transformErrorResponse,
        }),
    }),
});
