import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Field } from "../../utils/types";

export const formApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  reducerPath: "formApi",
  tagTypes: ["FormConfig"],
  endpoints: (build) => ({
    getFormConfig: build.query<{ fields: Field[] }, undefined>({
      query: () => "/formConfig",
      providesTags: () => [{ type: "FormConfig" }]
    })
  })
});

export const { useGetFormConfigQuery } = formApiSlice;
