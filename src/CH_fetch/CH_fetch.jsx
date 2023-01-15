import {useState, useEffect} from "react"
import Error from "../atoms/Error/Error"

const CH_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        try{
            const data = await fetch(urlFetch)
            .then(res => res.json())
            setData(data)
        }
        catch(error){
            setError(error)
            return <Error />
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return {
    data,
    error,
    loading,
    refetch: fetchData
  }
}

export default CH_fetch