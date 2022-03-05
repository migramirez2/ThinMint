import { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <SiDatabricks className="icon" />
                    <h1>thinMint</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>Home</li>
                    <li>Mint</li>
                    <li>MetaMask</li>
                    <li>Contact</li>
                    <button>Sign In</button>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar