import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, MenuItem, Button } from './styles/navbar';

const Navbar = ({ children, ...restProps }) => (
    <Wrapper {...restProps}>{children}</Wrapper>
);

Navbar.MenuItem = ({ to, children, ...restProps }) => (
    <Link to={to}>
        <MenuItem {...restProps}>{children}</MenuItem>
    </Link>
);

Navbar.Button = ({ to, children, ...restProps }) => (
    <Link to={to}>
        <Button {...restProps}>{children}</Button>
    </Link>
);

export default Navbar;
