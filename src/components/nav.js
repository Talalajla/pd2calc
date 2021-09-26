import { Component } from "react";
import {Navbar, NavItemRow, NavListRow, NavListItemRow, Screw, Indent} from "../styles/nav";
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
        <NavItemRow>
            <Screw left top><Indent type="type1" /></Screw>
            <p>{text}</p>
            <Screw right top><Indent type="type2" /></Screw>
        </NavItemRow>
    );
}

const NavList = () => {
    return(
        <NavListRow>
            <Screw bot left><Indent type="type3" /></Screw>
            <NavListItemRow as={Link} to="/" >Home</NavListItemRow>
            <NavListItemRow as={Link} to="/stealth" >Stealth</NavListItemRow>
            <NavListItemRow as={Link} to="/loud" >Loud</NavListItemRow>
            <NavListItemRow as={Link} to="/tutorial" >Help</NavListItemRow>
            <Screw bot right><Indent /></Screw>
        </NavListRow>
    );
}

export default Nav;