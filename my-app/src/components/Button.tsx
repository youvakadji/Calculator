import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
    Number,
    operation
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
}

const StyledButton = styled.button`
    background: #727171;
    border: none;
    border-radius: 8px;
    font-size: 24px;
    color: #fff;
`;

const Button: React.FC<Props> = ({
    buttonType = ButtonType.operation, 
    label, 
    position, 
    width, 
    height, 
    onClick,
    }) => {
    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] +1;
        styles.gridRowStart = position[1] +1;
    }
    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }
    if (height) {
        styles.gridRowEnd = `span ${height}`;
    }
    if (buttonType === ButtonType.Number) {
        styles.color = '#000';
        styles.background = '#e48900';
    }

    return (
    <StyledButton onClick={onClick} style={styles}>{label}</StyledButton>
    )
};

export default Button;