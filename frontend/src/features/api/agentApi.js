import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const agentApi = createApi({
  reducerPath: "agentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000/api`,
  }),
  endpoints: (build) => ({
    getCodeReview: build.mutation({
      query: ({ animalName, code, codeLanguage }) => ({
        url: `/review`,
        method: `POST`,
        body: {
          animalName,
          code,
          codeLanguage,
        },
      }),
    }),
  }),
});

export const { useGetCodeReviewMutation } = agentApi;
