import { Component } from "react";
import {Navbar, NAV_ITEM, NAV_LIST, NAV_LIST_ITEM, Screw, Indent} from "../styles/nav";
import { Link } from "react-router-dom";

class Nav extends Component {

    render() {
        return(
            <Navbar>
                <NavItem text='Payday 2 EXP calculator' />
                <NavList />
            </Navbar>
        );
    }
}

const NavItem = ({text}) => {
    return(
        <NAV_ITEM>
            <Screw left top><Indent type="type1" /></Screw>
            <p>{text}</p>
            <Screw right top><Indent type="type2" /></Screw>
        </NAV_ITEM>
    );
}

const NavList = () => {
    return(
        <NAV_LIST>
            <Screw bot left><Indent type="type3" /></Screw>
            <NAV_LIST_ITEM as={Link} to="/" >Home</NAV_LIST_ITEM>
            <NAV_LIST_ITEM as={Link} to="/stealth" >Stealth</NAV_LIST_ITEM>
            <NAV_LIST_ITEM as={Link} to="/loud" >Loud</NAV_LIST_ITEM>
            <Screw bot right><Indent /></Screw>
        </NAV_LIST>
    );
}

export default Nav;