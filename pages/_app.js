import '../styles/globals.css'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
      <>
        <Navbar />
        <Hero />
      </>
  );
}

export default App;


/*
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/