import { useState, useEffect } from 'react'
import { getCommunityMemes } from '../../utilities/meme-service'
import { Link } from 'react-router-dom'


export default function Memes() {
    const [memes, setMemes] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async() => {
        const data = await getCommunityMemes()
        console.log(data)
        setMemes(data)
        setIsLoading(false)
    }

    function renderMemes() {
        
        return (
            <div>
            <h2>Community Creations</h2>
            {memes.map((meme, idx)=>{
                    <img key={idx} src={meme.blank} alt="err" />
                
            })}
                
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