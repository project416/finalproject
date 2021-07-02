import React from "react";
import "../styles/location.css";

const DubaiAquarium = () => {
  return (
    <main>
      <h1 className="fc br mar">Dubai Aquarium</h1>
      <div className="info-div">
        <img src="./images/dubai-aquarium.jpg" alt="" class="loc-img" />
        <div class="info-text">
          Located on the ground floor of the Dubai Mall, the Dubai Aquarium &
          Underwater Zoo houses over 33,000 marine life occupying the 10 million
          litres of water within the tank. A unique underwater zoo occupies the
          level above the tank showcasing a plethora of underwater life that can
          be found inhabiting the oceans, rivers and other water bodies across
          the planet. The VR Zoo makes up the third section offering thrilling
          wildlife adventures via realistically created virtual tours.
        </div>
      </div>
    </main>
  );
};

export default DubaiAquarium;
