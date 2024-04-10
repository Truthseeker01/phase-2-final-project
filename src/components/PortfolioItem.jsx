import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PortfolioItem(){

    const params = useParams()
    console.log(params)

    const [ item, setItem ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/portfolios/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])

    return (
        <>
        <p>I'm an item with id of {params.id}</p>
        <h1>{item.name}</h1>
        </>
    )
}

export default PortfolioItem