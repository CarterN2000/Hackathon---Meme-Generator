import { Link } from 'react-router-dom'
import './Header.css'

function Nav() {
    return (
        <nav className="navBar">
            <div className="title">Ackeems Memes</div>
            <Link className="Links" to="/">Home</Link>
            <Link className="Links" to="/memes">Community Creations</Link>
            <Link className="Links" to="/favorites">Favorite Memes</Link>
        </nav>
    )
}
export default function Header() {
    return (
        <header>
            <Nav />
        </header>
    )
}