import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Train from "../../images/maps/stealth/train.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Train} imgName="Transport: Train Heist" jc="70"
                    tr11="Default (completion)" tr12="11000"
                    tr21="Each vault opened" tr22="3000"
                    tr31="Each ammo bag secured" tr32="800"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '2', '4']}
                    limitEnd={['', '3', '20']}
                    values={['11000', '3000', '800']}
                />
            </>
        );
    }
}



export default Heist;