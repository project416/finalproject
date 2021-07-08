import React, { useEffect } from "react";
import "../styles/locations.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BurjAlArab from "./BurjAlArab";
import BurjDubai from "./BurjDubai";
import DesertSafari from "./DesertSafari";
import DubaiAquarium from "./DubaiAquarium";
import DubaiFountain from "./DubaiFountain";

const Locations = () => {
  useEffect(() => {
    showAnimate();
  });
  return (
    <Router>
      <Switch>
        <Route path="/locations" exact>
          <main>
            <h1 className="fc br mar">Locations to visit in Dubai</h1>

            <div className="locations-div">
              <Link to="/burj-dubai">
                <div className="card">
                  <div className="card-info hide">
                    <span className="info-head">Burj-Khalifa</span>
                    <p className="info-p">
                      The biggest skyscraper in the world..
                    </p>
                  </div>
                  <img
                    className="card-img"
                    src="../images/burj-dubai.jpg"
                    alt=""
                  />
                </div>
              </Link>

              <Link to="/burj-al-arab">
                <div className="card">
                  <div className="card-info hide">
                    <span className="info-head">Burj-Al-Arab</span>
                    <p className="info-p">The world's only 7 start hotel..</p>
                  </div>
                  <img
                    className="card-img img-bt"
                    src="../images/burj-al-arab.jpg"
                    alt=""
                  />
                </div>
              </Link>

              <Link to="/dubai-aquarium">
                <div className="card">
                  <div className="card-info hide">
                    <span className="info-head">
                      Dubai Aquarium & Underwater Zoo{" "}
                    </span>
                    <p className="info-p">
                      An underground aquarium that houses over houses over
                      33,000 marine life ..
                    </p>
                  </div>
                  <img
                    className="card-img"
                    src="../images/dubai-aquarium.jpg"
                    alt=""
                  />
                </div>
              </Link>

              <Link to="/dubai-fountain">
                <div className="card">
                  <div className="card-info hide">
                    <span className="info-head">Dubai Fountain</span>
                    <p className="info-p">
                      The world's largest choreographed water fountain..
                    </p>
                  </div>
                  <img
                    className="card-img img-bt"
                    src="../images/dubai-fountain.jpg"
                    alt=""
                  />
                </div>
              </Link>

              <Link to="desert-safari">
                <div className="card">
                  <div className="card-info hide">
                    <span className="info-head">Desert Safari</span>
                    <p className="info-p">
                      Safari in the infamous deserts of Dubai..
                    </p>
                  </div>
                  <img
                    className="card-img img-bt"
                    src="../images/desert-safari.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </main>
        </Route>

        <Route path="/burj-dubai">
          <BurjDubai />
        </Route>

        <Route path="/burj-al-arab">
          <BurjAlArab />
        </Route>

        <Route path="/desert-safari">
          <DesertSafari />
        </Route>

        <Route path="/dubai-aquarium">
          <DubaiAquarium />
        </Route>

        <Route path="/dubai-fountain">
          <DubaiFountain />
        </Route>
      </Switch>
    </Router>
  );
};

const showAnimate = () => {
  const cardInfo = document.getElementsByClassName("card");
  for (let card of cardInfo) {
    card.onmouseover = function () {
      card.children[0].classList.toggle("show");
    };

    card.onmouseout = function () {
      card.children[0].classList.toggle("show");
    };
  }
};

export default Locations;
