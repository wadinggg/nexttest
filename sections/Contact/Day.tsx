import { spacing } from "../../system"
import styled from "styled-components"

const Day = styled.div`
    display: flex;
    div {
        margin-right: ${spacing.p400};
        margin-bottom: ${spacing.p300};

        &:last-child {
            margin-right: 0;
        }
    }
`

export default Day