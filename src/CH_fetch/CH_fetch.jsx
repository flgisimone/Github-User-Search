import {useState, useEffect} from "react"

const CH_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)

    const fetchData = async() => {
        try{
            const response = await fetch(urlFetch)
            if(response.ok){
                const data = await response.json()
                setData(data)
            }else{
                setError(response.statusText)
            }
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
    loading,
    refetch: fetchData
  }
}

export default CH_fetch