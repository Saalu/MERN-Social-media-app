import { apiSlice } from "./apiSlice";

const USER_URL ='http://localhost:9000/users'

export const usersApiSlice = apiSlice.injectEndpoints({

    endpoints:(builder) => ({
        login: builder.mutation({
            query:(data) => ({
                url:`${USER_URL}/login`,
                method: 'POST',
                body:data
            })
        }),
        register: builder.mutation({
            query:(data) => ({
                url:`${USER_URL}/register`,
                method: 'POST',
                body:data
            })
        }),
        logout: builder.mutation({
            query:() => ({
                url:`${USER_URL}/logout`,
                method: 'POST',
            })
        }),

        update: builder.mutation({
            query:(data) => ({
                url:`${USER_URL}/profile`,
                method: 'patch',
                body:data
            })
        }),
    })
})




export const {useLoginMutation,useLogoutMutation,useRegisterMutation, useUpdateMutation} = usersApiSlice