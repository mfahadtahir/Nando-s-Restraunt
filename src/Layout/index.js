import React from "react";

import NavBar from "../Components/NavBar";
import Poster from "../Components/Poster";
import Appeteasers from "../Components/Dishes/Categories/Appeteasers";
import FinoSides from "../Components/Dishes/Categories/FinoSides";
import PeriPeriChicken from "../Components/Dishes/Categories/PeriPeriChicken";
import SharingPlatters from "../Components/Dishes/Categories/SharingPlatters";
import Desserts from "../Components/Dishes/Categories/Desserts";
import Sides from "../Components/Dishes/Categories/Sides";
import Salads from "../Components/Dishes/Categories/Salads";
import TrySomethingNew from "../Components/Dishes/Categories/TrySomethingNew";
import BurgersPitasWraps from "../Components/Dishes/Categories/BurgersPitasWraps";

import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";

import { Data } from "../Data/Data";
import AboutUs from "../Components/AboutUs";

class Layout extends React.Component {
  componentDidMount() {
    console.log(Data);
  }
  render() {
    return (
      <div>
        <NavBar />
        <Poster />
        <div className="container divider"></div>
        <Appeteasers />
        <FinoSides />
        <PeriPeriChicken />
        <SharingPlatters />
        <Desserts />
        <Sides />
        <Salads />
        <TrySomethingNew />
        <BurgersPitasWraps />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Layout;
