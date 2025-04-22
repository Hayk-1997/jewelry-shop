import {
  ApiModules,
  BaseQueryFn,
  CreateApi,
  EndpointBuilder,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { getUserToken } from '@/helpers/auth';
import { authEndpoint } from '@/lib/apiModules/auth/endpoints';

type ModuleName = keyof ApiModules<never, never, never, never>;

export type ApiEndpointBuilder = EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
  | 'Category'
  | 'Material'
  | 'User'
  | 'Order'
  | 'ParentCategory'
  | 'Product'
  | 'BackOffice'
  | 'Tag'
  | 'Stone'
  | 'Carat',
  'api'
>;

// Create base API for other endpoints for example` {productApi}
export const createBaseApi = <T extends ModuleName>(createApi: CreateApi<T>) =>
  createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
      prepareHeaders: (headers) => {
        const token = getUserToken();

        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
      },
    }),
    tagTypes: [
      'Material',
      'Category',
      'ParentCategory',
      'User',
      'Order',
      'Product',
      'BackOffice',
      'Tag',
      'Carat',
      'Stone',
    ],
    endpoints: (builder) => ({
      ...authEndpoint(builder),
    }),
  });
