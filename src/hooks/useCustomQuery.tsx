import {
    useQuery,
} from '@tanstack/react-query'
import axios, { type AxiosRequestConfig } from 'axios'

interface IProps{
    queryKey:string[], 
    url: string, 
    config?: AxiosRequestConfig
}

function useCustomQuery({queryKey, url, config}: IProps) {
    return useQuery({
        queryKey: [queryKey],
        queryFn: async()=>{
            const {data}= await axios.get(url, config)
            return data
        }
    })
}
export default useCustomQuery
