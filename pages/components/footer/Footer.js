
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <div className='mintlogo'>
                            <Image src="/logomint.png" alt="me" width="80" height="80" />
                        </div>
                            <h1>thin<span>Mint</span></h1>
                        </div>
                        <div className='arrow-container'>
                        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                            <BsFillArrowUpCircleFill className='icon' />
                        </Link>
                        </div>
                </div>
                <div className="c-footer-2">
                    <div className='row'>
                    <Link className="footer-links" activeClass="active" to="top" spy={true} smooth={true} duration={1500} ><p>Home</p></Link>
                    <Link className="footer-links" activeClass="active" to="generate" spy={true} smooth={true} duration={1000} ><p>Mint</p></Link>
                    <Link className="footer-links" activeClass="active" to="info" spy={true} smooth={true} duration={500} ><p>Setup</p></Link>
                    <a href="mailto:waine.andrew@protonmail.com?subject=Regarding thinMint" className='footer-links'><p>Contact</p></a>
                    </div>
                    <form>
                        <div className="social-group">
                            <a href="https://www.linkedin.com/in/andrew-waine-florida/" target="_blank"><FiLinkedin className='social-icon' /></a>
                            <a href="https://github.com/Andy-Waine/thinMint" target="_blank"><FiGithub className='social-icon' /></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
