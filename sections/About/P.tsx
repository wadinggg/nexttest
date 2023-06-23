import { font, spacing } from "../../system"
import styled from "styled-components"

const P = styled.p`
    margin-bottom: ${spacing.p800};
    line-height: 1.8;
    font-size: ${font.size.s400};
    font-weight: 500;
    @media (min-width: 1200px) {
        width: 50%;
    }
`

export default P