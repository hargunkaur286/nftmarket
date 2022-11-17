import '../styles/globals.css'

//INTERNAL IMPORT
<<<<<<< HEAD
import { NavBar, Footer } from '../components/componentsindex';
=======
// import NavBar from '../components/componentsindex';
>>>>>>> 691dbdf84fc4dcf36c8488ba8ea84946fa990c3b

const MyApp = ({Component, pageProps})=> (
    <div>
    {/* <NavBar /> */}
    <Component {...pageProps} />
    <Footer />
</div>
);

export default MyApp;
