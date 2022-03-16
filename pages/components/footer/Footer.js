
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
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Mint</p>
                        <p>Setup</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3></h3>
                        <p></p>

                    </div>
                    <div className="col">
                        <h3></h3>
                        <p></p>

                    </div>
                    <div className="col">
                        <h3></h3>
                        <p></p>

                    </div>
                    <form>
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
