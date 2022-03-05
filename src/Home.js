import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61-9qAxcFhL._SX3740_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="345458"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – Oct. 16 2018"
            price={21.66}
            image="https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL675_SR675,480_.jpg"
            rating={5}
          />

          <Product
            id="699848"
            title="Custom Laser Engraved Dog Tags - Front and Back - Attractive Colours and Fonts"
            price={9.45}
            image="https://images-na.ssl-images-amazon.com/images/I/718vic+0qJL._AC_UL675_SR675,480_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="859652"
            title="Leather Sling Bag Crossbody Backpack for Men Women Shoulder Chest Day Pack Travel Outdoor Tactical Hiking Camping Daypack Brown"
            price={38.89}
            image="https://images-na.ssl-images-amazon.com/images/I/51941WfhYHL._AC_UL675_SR675,480_.jpg"
            rating={4}
          />
          <Product
            id="695874"
            title="iRobot Roomba i3 (3150) Wi-Fi Connected Robot Vacuum Vacuum - Wi-Fi Connected Mapping, Works with Alexa, Ideal for Pet Hair, Carpets"
            price={449.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81K8+WapXOL._AC_UL320_SR320,320_.jpg"
            rating={5}
          />
          <Product
            id="263589"
            title="TCL 32S327-CA 1080p Smart LED Television (2019)"
            price={229.99}
            image="https://images-na.ssl-images-amazon.com/images/I/714vvac2rmL._AC_UL320_SR320,320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="698547"
            title="COSORI Smart WiFi Air Fryer 5.8QT(100 Recipes), 1700-Watt Base for Air Frying, Roasting, 11 Cooking Preset,Preheat Remind, Touchscreen"
            price={174.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TztTCk6UL._AC_UL320_SR320,320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
