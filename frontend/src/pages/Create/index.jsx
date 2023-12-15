import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createMeme } from '../../utilities/meme-service'
import { useNavigate } from 'react-router'
import './Create.css'

export default function Create() {

    const location = useLocation()
    const memeTemp = location.state 

    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    const navigate = useNavigate()

    function handleTopChange(e) {
        setTopText(e.target.value)
    }

    function handleBottomChange(e) {
        setBottomText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(topText, bottomText, "current data")
        try {
            const newMeme = await createMeme(topText, bottomText)
            navigate('/memes')
        }
        catch(err) {
            console.log(err)
        }
        setTopText('')
        setBottomText('')
    }

    return (
        <>
        <section className='content-container'>
        <h1>Create Meme</h1>
        <div className="create-container">
            <img className='temp-image' src={memeTemp.img} alt="Meme" />
            <form className="create-meme-form">
                <input type="text" name="top-text"  placeholder="TOP-TEXT" onChange={handleTopChange} required/>
                <input type="text" name="bottom-text" placeholder="BOTTTOM-TEXT" onChange={handleBottomChange} required/>
                <button type="submit" onSubmit={handleSubmit}>CREATE MEME</button>
            </form>
        </div>
        </section>
        </>
    )
}