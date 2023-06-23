import { color, font, spacing } from "../../system"
import styled from "styled-components"

const LearnMore = styled.a`
    border: 2px solid ${color.chroma.brown100};
    border-radius: 30px;
    color: ${color.chroma.brown100};
    font-weight: 500;
    font-size: ${font.size.s400};
    text-decoration: none;
    padding: ${spacing.p200} ${spacing.p400};
`

export default LearnMore