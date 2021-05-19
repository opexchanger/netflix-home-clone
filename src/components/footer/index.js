import React from 'react';
import {
    Wrapper,
    Row,
    Column,
    Link,
    Title,
    Text,
    Break,
} from './styles/footer';

const Footer = ({ children, ...restProps }) => (
    <Wrapper {...restProps}>{children}</Wrapper>
);

Footer.Row = ({ children, ...restProps }) => (
    <Row {...restProps}>{children}</Row>
);

Footer.Column = ({ children, ...restProps }) => (
    <Column {...restProps}>{children}</Column>
);

Footer.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

Footer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Footer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ ...restProps }) => <Break {...restProps} />;

export default Footer;
