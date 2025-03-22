import Logo from "../assets/logo.gif"
import './header.css';
function Header() {
  return (
    <header>
    <img className="logo" src={Logo} alt="logo" />
    <a href="/">Home</a>
    </header>
  )
}

export default Header
