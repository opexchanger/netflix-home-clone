import React from 'react';

import { Background, Container } from './styles/hero';

export default function Hero({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Hero.Frame = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);
