export default function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">
                nix<span>webdev</span>
            </a>
    
            {/* <!-- Hamburger Menu --> */}
            <i className="bx bx-menu" id="menu-icon"></i>
    
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
                {/* <a href="#support">Support</a> */}
            </nav>
        </header>
    )
}