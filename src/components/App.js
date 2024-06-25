import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./templates/Header";
import Navigation from "./templates/Navigation";
import Footer from "./templates/Footer";
import Home from "./Home";

import MultiplesOf3and5 from "./MultiplesOf3and5";
import Fibonacci from "./Fibonacci";
import LargestPrimeFactor from "./LargestPrimeFactor";
import LargestPalindromeProduct from "./LargestPalindromeProduct";
import SmallestMultiple from "./SmallestMultiple";
import SumSquareDifference from "./SumSquareDifference";
import TenThousandsFirstPrime from "./TenThousandsFirstPrime";

function Layout() {
  return (
    <div className="row">
      <Navigation />
      <div className="col-8"><Outlet /></div>
    </div>
  );
}
function NoMatch(){
  return <div>404 Not found.</div>
}

function App() {
  return (
    <div className="container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="multiplesof35" element={<MultiplesOf3and5 />} />
          <Route path="fibonacci" element={<Fibonacci />} />
          <Route path="largestprimefactor" element={<LargestPrimeFactor />} />
          <Route path="largestpalindromeproduct" element={<LargestPalindromeProduct />} />
          <Route path="smallestmultple" element={<SmallestMultiple />} />
          <Route path="sumsquaredifference" element={<SumSquareDifference />} />
          <Route path="tenthousandsfirstprime" element={<TenThousandsFirstPrime />} />
          
          
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
