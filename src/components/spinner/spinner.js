import React from "react";
import spinner from "../../assets/gear.svg";
import "./spinner.scss";

const Spinner = () => {
    return (
        <div className="spinner_icon">
            <img src={spinner} alt="Loading..." />
        </div>
    );
};

export default Spinner;
