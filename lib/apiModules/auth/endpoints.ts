import { setUserToken } from '@/helpers/auth';
import { ApiEndpointBuilder } from '@/lib/apiModules/baseApi';
import { ForgotPasswordSchema } from '@/schema/auth/forgotPasswordSchema';
import { RegisterSchema } from '@/schema/auth/registerSchema';
import { TUserData, TUserLoginFormRequest } from '@/types/user';

export const authEndpoint = (builder: ApiEndpointBuilder) => ({
  getAuthUser: builder.query<TUserData | null, unknown>({
    query: () => 'me',
    providesTags: ['User'],
  }),
  userLogin: builder.mutation({
    query: (payload: TUserLoginFormRequest) => ({
      url: `login`,
      method: 'POST',
      body: payload,
    }),
    transformResponse: (response: { token: string }) => {
      setUserToken(response.token);
      return response;
    },
    invalidatesTags: ['User'],
  }),
  userLogOut: builder.mutation({
    query: () => ({
      url: `logout`,
      method: 'POST',
    }),
    invalidatesTags: ['User'],
  }),
  userRegister: builder.mutation({
    query: (payload: RegisterSchema) => ({
      url: `register`,
      method: 'POST',
      body: payload,
    }),
    transformResponse: (response: { token: string }) => {
      setUserToken(response.token);
      return response;
    },
    invalidatesTags: ['User'],
  }),
  userForgotPassword: builder.mutation({
    query: (payload: ForgotPasswordSchema) => ({
      url: `forgot-password`,
      method: 'POST',
      body: payload,
    }),
  }),
});
