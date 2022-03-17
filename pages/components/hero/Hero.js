import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect"


const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <h1>Create a</h1>
                    <div className='minty'>
                        <Typewriter 
                            options={{
                            loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("New Cryptocurrency")
                                .pauseFor(1500)
                                .deleteAll()
                                .pauseFor(500)
                                .typeString("Scalable ERC-20 Token")
                                .pauseFor(1500)
                                .deleteAll()
                                .pauseFor(500)
                                .typeString("Fungible Gaming Coin")
                                .pauseFor(1500)
                                .deleteAll()
                                .pauseFor(500)
                                .typeString("DeFi Stablecoin")
                                .pauseFor(1500)
                                .deleteAll()
                                .pauseFor(500)
                                .typeString("Greater Future")
                                .pauseFor(1500)
                                .deleteAll()
                                .pauseFor(500)
                                .start();
                            }}
                        />
                    </div>
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