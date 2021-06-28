import React from "react";
import "../styles/home.css";
import "../styles/image-pos.css";

const Home = () => {
  return (
    <main>
      <h1 class="head1">Dubai</h1>
      <div class="three-img-container">
        <div id="img-first" class="div-img top-img"></div>
        <div id="img-second" class="div-img mid-img"></div>
        <div id="img-third" class="div-img bottom-img"></div>

        <div class="info-container">
          <h1 style={{ color: "#374AD2" }}>Dubai:</h1>
          <h1> The City of Gold</h1>
        </div>
      </div>

      <h1 class="fc br">Why Dubai?</h1>
      <div className="info-sec">
        <p>
          Discover the extravagant luxury, high-tech facilities and old world
          charm of Dubai. This United Arab Emirates (UAE) state is located on
          the eastern coast of the Arabic Peninsular, in the southwest corner of
          the Arabian Gulf. Renowned, worldwide, as a booming centre of
          international trade and innovation, Dubai has fast become one of the
          world’s most popular tourist destinations. Only in Dubai can one gaze
          upon, and travel up, the world’s largest freestanding structure (the
          Burj Khalifa), shop in both exclusive designer malls and traditional
          trade souks and indulge in feasts inspired by the flavours of the
          world while staying in a 7-star hotel!
        </p>
      </div>

      <div className="summer">
        <div className="visit visit-one">
          <h1>Sun, sand and summer vibes</h1>
          <p>
            Find sun-drenched adventures, mouthwatering cuisine and endless
            entertainment at every turn. Dubai presents a summer to remember.
          </p>
        </div>

        <h1 className="fc br">Dubai in Summer</h1>

        <div className="visit visit-two">
          <h1>Summer in Dubai</h1>
          <p>
            Are you ready for a holiday? With endless sunshine, fabulous
            shopping, breezy cabanas and family fun, Dubai presents the summer!
          </p>
        </div>
      </div>

      <h1 class="fc br">History and Culture</h1>
      <div className="info-sec">
        <p>
          Dubai has a rich, Arabic cultural heritage. While it is now more known
          for its intriguing mix of deserts, beaches and luxurious manmade
          feats, the culture of the Emirati people still have a major role to
          play.
        </p>
      </div>
    </main>
  );
};

export default Home;
