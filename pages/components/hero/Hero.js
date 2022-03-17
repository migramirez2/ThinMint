import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Hero = () => {
    //React Hook to Delay Animation until Element is in View
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const herotextVariants = {
        hidden: {
            scale: 1,
            opacity: 0
        },
        visible : {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0,
                duration: 2.0,
            },
        },
    };

    return (
        <div className='hero'>
            <div className='container'>
                <motion.div ref={ref} initial="hidden" animate={controls} variants={herotextVariants} className='content'>
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
                </motion.div>
            </div>
        </div>
    )

}

export default Hero