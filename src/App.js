// import logo from './logo.svg';
import Header  from "./layout/Header";
import Articles  from "./layout/Articles";
import Downloadapp from "./layout/Downloadapp";
import Healthcare from "./layout/Healthcare";
import Services from "./layout/Services";
import Testimonials from "./layout/Testimonials";
import Footer from "./layout/Footer";

// import {
//   Header,
//   Articles,
//   Downloadapp,
//   Healthcare,
//   Services,
//   Testimonials,
//   Footer,
// } from "./layout/Layout";
import "./App.css";

const App = () => (
  <>
    <Header />
    <Articles />
    <Downloadapp />
    <Healthcare />
    <Services />
    <Testimonials />
    <Footer />
  </>
);

export default App;
