import {useState, useEffect} from "react"
import axios from "axios"

const CH_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)
    const [errorServer, setErrorServer] = useState(false)

    const token = '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';
    const headers = { 'Authorization': `token ${token}` };

    const fetchData = async() => {
        try{
            const response = await axios(urlFetch, {headers})
            setData(response.data)
        }
        catch(error){
                setError(error);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return{
    data,
    error,
    loading,
    refetch: fetchData
  }
}

export default CH_fetch