import React from "react";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Explore = () => {
  return (
    <div className={"pageContainer"}>
      <header>
        <p className={"pageHeader"}>Explore</p>
      </header>
      {/*SLIDER*/}
      <Slider />
      <p className="exploreCatehoryHeading">Categories</p>
      <div className="exploreCategories">
        <Link to={"/category/rent"}>
          <img
            src={rentCategoryImage}
            alt="Rent"
            className={"exploreCategoryImg"}
          />
          <p className="exploreCategoryName">Places for rent</p>
        </Link>
        <Link to={"/category/sale"}>
          <img
            src={sellCategoryImage}
            alt="Sell"
            className={"exploreCategoryImg"}
          />
          <p className="exploreCategoryName">Places for sell</p>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
