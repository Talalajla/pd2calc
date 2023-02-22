import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Biker from "../../images/maps/loud/bikers.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Biker} imgName="The Biker Heist (day 1)" jc="30"
                    requirements={[
                        ["Default (completion)", "14500", "rCB"], ["Collecting soda for Mike", "1000", "rCB"], 
                        ["Finding tools", "2000", "rCB"], ["Finding gas & pipes", "2000", "rCB"], 
                        ["Finding engine", "3000", "rCB"], ["Helping Mike in garage", "3000", "rCB"], 
                        ["Finding seat", "6000", "rCB"], ["Finding skull", "8000", "rCB"], 
                        ["Each bag secured", "500", "rS", "0", "9"]
                    ]}
                />
            </>
        );
    }
}

export default Heist;