import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  // Strip PUBLIC KEY HERE
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run once
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        //logged out
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        {/* SET THE DIFFERENT PATH FOR DIFFERENT PAGE*/}
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]} />

          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
