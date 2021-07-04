import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [quotes, setQuotes] = useState()

  useEffect(() => {
    newQuotes()
  }, [])

  const newQuotes = async () =>{
    const URL = await fetch(url)
    const response = await URL.json()
    setQuotes(response[0])
  }

  return [quotes, newQuotes]
}
