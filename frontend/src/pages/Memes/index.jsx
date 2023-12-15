import { useState, useEffect } from 'react'
import { getCommunityMemes } from '../../utilities/meme-service'
import { Link } from 'react-router-dom'
import './Memes.css'


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
            <>
            <h2>Community Creations</h2>
            <div className="all-memes">
            {memes.map((meme, idx)=>{
                return(
                    <div className='memey-container'>
                    <img className="meme" key={idx} src={meme.blank} alt="err" />
                    </div>
                )
            })}
                
            </div>
            </>
        )
    }

    useEffect(() => {
        handleRequest()
    },[])

    return (
      isLoading ? <h1>Loading...</h1> : renderMemes() 
    )
}