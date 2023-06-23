import { font, spacing } from "../../system"
import styled from "styled-components"

const InnerContainer = styled.div`
    // text-align: center;
    padding: ${spacing.p600} ${spacing.p400};
    position: relative;
    z-index: 2;

    h3, p {
        margin-bottom: ${spacing.p800};
        margin-left: ${spacing.p400};
        margin-right: ${spacing.p400};
        font-size: ${font.size.s500};
    }

    h3 {
        font-size: ${font.size.s600};
        font-weight: 400;
        margin-bottom: ${spacing.p700};
    }

    p {
        line-height: 2.2;
        font-size: ${font.size.s500};
        font-weight: 500;
    }
`

export default InnerContainer