import {styled} from "styled-components"
import { NavLink } from "react-router-dom";


const NavLinks = styled(NavLink)`
  textdecoration: "none";
  color: { (active) => this.props.active ? 'red' : 'gold' };
`;

export {NavLinks}