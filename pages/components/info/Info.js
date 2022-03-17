import { Link } from 'react-scroll'

const Info = () => {
    return (
        <div id='info' name='info' className='info'>
            <div className="container">
                <div className="content">
                    <h1><span>Setup</span></h1>
                    <h2>New to Blockchain? No problem.</h2>
                    <h3>You&apos;ll be minting your first token on the Ethereum Blockchain within minutes!</h3>
                    <h3>
                        First, setup the <a href="https://metamask.io/download/" className='text-link' target="_blank" rel="noreferrer">MetaMask</a> extension in your browser and ensure your wallet is connected to the <a href="https://umbria.network/connect/ethereum-testnet-rinkeby" className='text-link' target="_blank" rel="noreferrer">Rinkeby Test Network</a>. 
                        Then, to power the minting process, you will need to request Rinkeby Testnet Ethereum <a href="https://faucets.chain.link/rinkeby" className='text-link' target="_blank" rel="noreferrer">here</a> (don&apos;t worry - it's free).
                        The deposit normally takes a couple of minutes. Once complete, you're ready to mint!
                    </h3>
                    <div className="two-button">
                            <Link className='button' activeClass="active" to="generate" spy={true} smooth={true} duration={500} >
                                     MINT
                            </Link>
                            <a href="mailto:waine.andrew@protonmail.com?subject=Regarding thinMint" className='button hollow'>
                                     CONTACT
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info