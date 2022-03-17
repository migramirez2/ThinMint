import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll'

const Info = () => {
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

    const textVariants = {
        hidden: {
            scale: 1,
            opacity: 0
        },
        visible : {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0,
                duration: 1.0,
            },
        },
    };

    const textVariants2 = {
        hidden: {
            scale: 1,
            opacity: 0
        },
        visible : {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .5,
                duration: 1.0,
            },
        },
    };

    const textVariants3 = {
        hidden: {
            scale: 1,
            opacity: 0
        },
        visible : {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 1.0,
            },
        },
    };

    const textVariants4 = {
        hidden: {
            scale: 1,
            opacity: 0
        },
        visible : {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 2.2,
                duration: 1.5,
            },
        },
    };

    return (
        <div id='info' name='info' className='info'>
            <div className="container">
                <div className="content">
                    <motion.div ref={ref} initial="hidden" animate={controls} variants={textVariants}>
                        <h1><span>Setup</span></h1>
                    </motion.div>
                    <motion.div ref={ref} className="cancel-div" initial="hidden" animate={controls} variants={textVariants2}>
                        <h2>New to Blockchain? <motion.div className='cancel-div' ref={ref} initial="hidden" animate={controls} variants={textVariants3}>No problem.</motion.div></h2>
                    </motion.div>
                    <motion.div ref={ref} initial="hidden" animate={controls} variants={textVariants4}>
                        <h3>You&apos;ll be minting your first token on the Ethereum Blockchain within minutes!</h3>
                        <h3>
                            First, setup the <a href="https://metamask.io/download/" className='text-link' target="_blank" rel="noreferrer">MetaMask</a> extension in your browser and ensure your wallet is connected to the <a href="https://umbria.network/connect/ethereum-testnet-rinkeby" className='text-link' target="_blank" rel="noreferrer">Rinkeby Test Network</a>. 
                            Then, to power the minting process, you will need to request Rinkeby Testnet Ethereum <a href="https://faucets.chain.link/rinkeby" className='text-link' target="_blank" rel="noreferrer">here</a> (don&apos;t worry - it&apos;s free).
                            The deposit normally takes a couple of minutes. Once complete, you&apos;re ready to mint!
                        </h3>
                        <div className="two-button">
                                <Link className='button' activeClass="active" to="generate" spy={true} smooth={true} duration={500} >
                                        MINT
                                </Link>
                                <a href="mailto:waine.andrew@protonmail.com?subject=Regarding thinMint" className='button hollow'>
                                        CONTACT
                                </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Info