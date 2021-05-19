import React, { useState } from 'react';

import { Container, Title, Item, Header, Body } from './styles/accordion';

const Accordion = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Accordion.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <Item show={toggleShow} {...restProps}>
            {React.Children.map(children, (child) => {
                const props =
                    child.type === Accordion.Header
                        ? { toggle: [toggleShow, setToggleShow] }
                        : { toggleShow };
                return React.cloneElement(child, props);
            })}
        </Item>
    );
};

Accordion.Header = ({ children, toggle, ...restProps }) => {
    const [toggleShow, setToggle] = toggle;

    return (
        <Header
            onClick={() => setToggle((curToggle) => !curToggle)}
            {...restProps}
        >
            <h3>{children}</h3>
            {toggleShow ? (
                <img src='/images/icons/close-slim.png' alt='Close' />
            ) : (
                <img src='/images/icons/add.png' alt='Open' />
            )}
        </Header>
    );
};

Accordion.Body = ({ children, toggleShow, ...restProps }) => {
    return toggleShow ? (
        <Body {...restProps}>
            <p>{children}</p>
        </Body>
    ) : null;
};

export default Accordion;
