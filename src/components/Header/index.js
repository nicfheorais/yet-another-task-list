import React from "react";
// import {MAIN_HEADER, SUB_HEADER} from "../../libs/config.js";

export const MAIN_HEADER = "main";
export const SUB_HEADER = "sub";

export function Header({headerText, headerType}) {
    switch (headerType) {
        case MAIN_HEADER:
            return <h1 className="header">{headerText}</h1>;

        case SUB_HEADER:
            return <h2 className="header">{headerText}</h2>;

        //and if parameter value is unrecognised
        default:
            return <p>{headerText}</p>;
    }
}

export default Header;
