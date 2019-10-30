import React from "react";

const backdrop = (props) =>
    props.showModal ? (
        <div className="backdrop" onClick={props.clickedModal}></div>
    ) : null;

export default backdrop;
