import { ApiEndpointBuilder } from '@/lib/apiModules/baseApi';

export const searchEndpoint = (builder: ApiEndpointBuilder) => ({
  search: builder.query<null, unknown>({
    query: () => 'https://fakestoreapi.com/products',
    providesTags: ['Search'],
  }),
});
