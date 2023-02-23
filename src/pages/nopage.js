import React from "react";
import { Error404 } from "../styles/main";


const NoPage = () => {

    return(
        <Error404>
            <div>
                <span>Error 404!</span>
                Page was not found, check if your url is correct or move via tabs in Stealth or Loud categories you can find on navbar.
            </div>
        </Error404>
    );
}

export default NoPage;