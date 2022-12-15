import React from 'react';
import styled from 'styled-components';
import { IButton } from './types';

const StyledButton = styled.button`

`;

export const Button: React.FC<IButton> = ({ id, variant, ...rest }) => {
    return <StyledButton {...rest}>button</StyledButton>;
};