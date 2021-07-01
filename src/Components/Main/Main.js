import React from "react";
// import { NewContextProvider } from "../News/NewContext";

import Alertsection from "./Alertsection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

import Youtube from "../Youtube/Youtube";
// import LatestNews from "../News/LatestNews";

// import NewsContext from "../News/NewContext";
// import Iphone from "./Iphone";
function Main() {
  return (
    <div>
      <Alertsection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* <LatestNews /> */}
      <Youtube />
    </div>
  );
}

export default Main;
