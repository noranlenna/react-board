import useSWR from 'swr'
import fetcher from '../utils/fetcher';

function useUser(id){
  const {data, error} = useSWR(`https://www.mecallapi.com/api/login/${id}`,fetcher)

  return {
    user:data,
    isLoading:!error & !data,
    isError:error
  }
}