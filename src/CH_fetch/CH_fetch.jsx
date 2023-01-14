import {useState, useEffect} from "react"

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
    loading
  }
}

export default CH_fetch