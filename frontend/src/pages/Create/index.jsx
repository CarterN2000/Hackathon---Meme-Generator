import { useLocation } from 'react-router-dom'

export default function Create() {

    const location = useLocation()
    const memeTemp = location.state 
    console.log(location)


    return (
        <>
        <h1>Create meme</h1>
        </>
    )
}