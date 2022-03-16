import { Link } from 'react-scroll'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <h1>Create a</h1>
                    <h1 className='blue'>New ERC-20 Token</h1>
                    <h1>with thin<span>Mint</span></h1>
                    <div className="two-button">
                            <Link className='button' activeClass="active" to="generate" spy={true} smooth={true} duration={500} >
                                     MINT
                            </Link>
                            <Link className="button hollow" to="info" activeClass="active" spy={true} smooth={true} duration={1000} >
                                     SETUP
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero