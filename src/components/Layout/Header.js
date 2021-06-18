import React from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "../Layout/HeaderCartButton";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delcious food" />
      </div>
    </>
  );
}
