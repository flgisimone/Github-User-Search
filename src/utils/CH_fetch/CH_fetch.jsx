import {useState, useEffect} from "react"
import axios from "axios"

const CH_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        setLoading(true)
        try{
            const response = await axios(urlFetch)
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