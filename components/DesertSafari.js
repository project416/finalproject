import React from "react";
import "../styles/location.css";

const DesertSafari = () => {
  return (
    <main>
      <h1 className="fc br mar">Desert Safari</h1>
      <div className="info-div">
        <img src="./images/desert-safari.jpg" alt="" class="loc-img" />
        <div class="info-text">
          Dubai, mainly renowned for its great infrastructure, is also known for
          its adventurous streak. At the heart of Dubai is still its desolated
          desert. And so, to enjoy the desert a bit more effectively, the city
          presents various Desert Safari options. The experience is one of its
          kind and worth every penny spent! Visitors can experience desert
          camping with a delicious Arabian dinner, belly dancers and other
          traditional performers. Day safaris hold you in for an adventure as
          you get to try out Dune Bashing, sandboarding, quad biking, camel
          rides and more.
        </div>
      </div>
    </main>
  );
};

export default DesertSafari;
