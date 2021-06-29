import React from "react";
import "../styles/location.css";

const BurjDubai = () => {
  return (
    <main>
      <h1 className="fc br mar">Burj Khalifa</h1>
      <div className="info-div">
        <img src="./images/burj-dubai.jpg" alt="" class="loc-img" />
        <div class="info-text">
          Towering at a height of 2,700 feet, the Burj Khalifa is currently the
          tallest tower in the world. With two observation decks, a Las
          Vegas-inspired fountain, nine of the city's best luxury hotels and
          multiple restaurants, this 21st-century architectural marvel must be
          your number one place to visit when in Dubai or even the UAE. Also,
          make sure to book your tickets in advance well to avoid last moment
          hassles.
        </div>
      </div>
    </main>
  );
};

export default BurjDubai;
