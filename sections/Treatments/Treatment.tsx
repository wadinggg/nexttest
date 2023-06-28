import React, { ReactNode } from "react";
import { color, spacing } from "../../system"
import styled from "styled-components"

interface IProps {
    children?: ReactNode
    bg: string
}

const TreatmentContainer = styled.div<IProps>`
    color: ${color.greyscale.g100};
    border-radius: 0px 20px;
    margin-bottom: ${spacing.p800};
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: ${({bg}) => `url(${bg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &:last-child {
        margin-bottom: 0;

        @media (min-width: 768px) {
            margin-bottom: ${spacing.p800};
        }
    }
`

const Blur =  styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0px 20px;
    background: hsla(0, 0%, 88%, 0.8);
    // backdrop-filter: blur(3px);
    z-index: 1;
`

const Treatment = ({ children, bg }: IProps) => {
    return (
        <TreatmentContainer bg={bg}>
            {children}
        </TreatmentContainer>
    )
}

export default Treatment