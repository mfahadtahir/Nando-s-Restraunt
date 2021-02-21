import React from "react";
import posterImg from "../../../Images/Backgrounds/Finos-background.jpg";
import { Data } from "../../../Data/Data";
import ProductSlider from "../ProductSlider";
import M from "materialize-css";

class FinoSides extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div id="appeteasers">
        <div className="section white">
          <div className="row container" style={{ marginBottom: 0 }}>
            <h2 className="header" style={{ fontFamily: "Parisienne, cursive", fontStyle: "italic", marginBottom: 0 }}>
              {Data.categorys[1].name}
            </h2>
            <p className="grey-text text-darken-3 lighten-3">{Data.categorys[1].discription}</p>
          </div>
        </div>

        <div className="parallax-container">
          <div className="container">
            <h3 style={{ fontFamily: "Cormorant Garamond", fontStyle: "italic" }}>Menu</h3>
            <ProductSlider data={Data.categorys[1]["menu-items"]} styleClass={"light-slider"} />
          </div>

          <div className="parallax">
            <img alt="" width="100%" src={posterImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default FinoSides;
