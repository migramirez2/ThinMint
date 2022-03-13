import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='top' className="navbar">
            <div className="container">
                <div className="logo">
                    <div className='mintlogo'>
                        <Image src="/logomint.png" alt="me" width="64" height="64" />
                    </div>
                    <h1>thin<span>Mint</span></h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>Home</li>
                    <li>Mint</li>
                    <li>Info</li>
                    <li>Contact</li>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar