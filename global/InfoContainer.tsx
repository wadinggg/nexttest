import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { spacing } from "../system";

const InfoContainer = styled(SectionContainer)`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr min-content;
        gap: ${spacing.p600};
        align-content: flex-start;
    }
`

export default InfoContainer