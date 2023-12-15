import { useState, useEffect } from 'react'
import { showMeme } from '../../utilities/meme-service'
import { useParams } from "react-router";

import './Show.css'

export default function Show() {
    const {id} = useParams()
const [meme, setMeme] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async() => {
        const data = await showMeme(id)
        console.log(data)
        setMeme(data)
        setIsLoading(false)
    }

    function renderMemes() {
        
        return (
            <div>
            <h2>Community Creations</h2>
                <img className='img' src={meme.blank} alt="" />
            </div>
        )
    }
    useEffect(() => {
        handleRequest()
    },[])

    return (
      isLoading ? <h1>Loading...</h1> : renderMemes() 
    )
}