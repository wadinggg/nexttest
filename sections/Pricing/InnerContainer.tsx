import { font, spacing } from "../../system"
import styled from "styled-components"

const InnerContainer = styled.div`
    margin-bottom: ${spacing.p800};
    font-size: ${font.size.s400};
    @media (min-width: 1200px) {
        width: 50%;
    }
    &:last-child {
        margin-bottom: 0;
    }

    p {
        margin-bottom: ${spacing.p500};
        line-height: 1.8;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default InnerContainer