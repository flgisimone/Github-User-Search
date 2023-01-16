import {useState, useEffect} from "react"
import axios from "axios"
import Error from "../Error/Error"

const CH_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        try{
            const response = await axios(urlFetch)
            setData(response.data)
        }
        catch(error){
            setError(error)
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