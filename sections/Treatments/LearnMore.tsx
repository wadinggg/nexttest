import { color, spacing } from "../../system"
import styled from "styled-components"

const LearnMore =  styled.a`
    color: #fff;
    border: 2px solid #fff;
    text-decoration: none;
    font-weight: 500;
    align-self: flex-end;
    padding: ${spacing.p200};
    border-bottom: 0;
    border-right: 0;
    border-top-left-radius: 15px;
    position: relative;
    z-index: 2;
    
    @media (min-width: 768px) {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`

export default LearnMore