import React from "react";
import "../styles/location.css";

const BurjAlArab = () => {
  return (
    <main>
      <h1 className="fc br mar">Burj Al Arab</h1>
      <div className="info-div">
        <img src="./images/burj-al-arab.jpg" alt="" class="loc-img" />
        <div class="info-text">
          Established in the year 1999, Burj Al Arab is one of the premium
          hotels of Dubai located on an artificial island off Jumeirah Road.
          Designed in the shape of a sail of a dhow, this iconic landmark houses
          an array of shiny chauffeur-driven limousines and a private helipad.
          Talking of luxury, the hotel features an attractive fountain, an
          admirable lobby and richness induced 203 suites. Standing tall at a
          height of 180 meters, the royalty factor of the hotel is brought out
          by its may interior elements adorned in real gold! A prior reservation
          (on its website) is required to get past the lobby security to visit
          its restaurant if you are not staying there.
        </div>
      </div>
    </main>
  );
};

export default BurjAlArab;
