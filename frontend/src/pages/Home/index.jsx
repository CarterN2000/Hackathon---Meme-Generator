import { useState, useEffect } from 'react'
import { getMemeTemplates } from '../../utilities/meme-service'
import './Home.css'

export default function Home() {
    const [memes, setMemes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async() => {
        const data = await getMemeTemplates()
        setMemes(data)
        setIsLoading(false)
    }

    function renderMemes() {
        
        return (
            <>
            <h2>Search Meme Templates!</h2>
            <section className="meme-container">
            {memes?.map(function(meme, idx) {
                return(
                    <div key={idx} className="single-meme-container">
                        <div><img className="memeTemp" src={meme.blank} alt="Error" /></div>
                        <button>Use This Template</button>
                    </div>
                )
            })}
            </section>
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