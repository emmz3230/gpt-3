import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import "./Brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="google" />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div>
      <img src={atlassian} alt="slack" />
    </div>
    <div>
      <img src={dropbox} alt="slack" />
    </div>
    <div>
      <img src={shopify} alt="slack" />
    </div>
  </div>
);

export default Brand;
