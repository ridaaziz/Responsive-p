import Link from 'next/link'
import "../style/header.css"

const Header = () => {
  return (
    <div className="header">
     {/* {left nav} */}
    <div>
      <h1 className="logo">PORTFOLIO</h1>
      </div>
      {/* {rit nav} */}
      <div className="header-right-div">
        <ul className="header-links">
          <li ><Link  href="/" className="nav-links">HOME</Link></li>
          <li ><Link  href="#about" className="nav-links">ABOUT</Link></li>
          <li ><Link  href="#skills" className="nav-links">SKILLS</Link></li>
          <li ><Link  href="#contact" className="nav-links">CONTACT</Link></li>

        </ul>
      </div>

    </div>

  )
}

export default Header