import '../styles/globals.css'
import Generator from './components/generator/Generator';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';


function App() {
  return (
      <>
        <Navbar />
        <Hero />
        <Generator />
        <Info />
        <Footer />
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