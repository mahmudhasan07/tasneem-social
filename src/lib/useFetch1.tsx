"use client"
import { useQuery } from '@tanstack/react-query';
import { useAxios } from './useAxios';
// import useAxios from './useAxios';


const useFetch1 = (data1: string, data2?: string) => {
    // console.log(data1,data2);
    const axiosLink = useAxios()
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: [data1, data2],
        queryFn: async () => {
            const res = await axiosLink.get(`/${data1}?${data2}`)
            return res.data
        },
    })

    return { data, isLoading, isError, error, refetch };

    // if (isLoading) {
    //     return "loading"
    // }

    // if (isError) {
    //     return `An error ${error.message}`
    // }

    // return [data, refetch]
};

export default useFetch1;