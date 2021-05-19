import React from 'react';

import { Container, Text, Input, Button } from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

OptForm.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

OptForm.Input = ({ ...restProps }) => <Input {...restProps}></Input>;

OptForm.Button = ({ children, ...restProps }) => (
    <Button {...restProps}>
        {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
);

export default OptForm;
