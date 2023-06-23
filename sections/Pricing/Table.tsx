import { color, spacing } from "../../system"
import styled from "styled-components"
import InnerContainer from "./InnerContainer";

interface IProps {
    column?: boolean;
}

const Row = styled.div<IProps>`
    border: 2px solid ${color.chroma.brown100};
    border-bottom: none;
    &:last-child {
        border-bottom: 2px solid ${color.chroma.brown100};
    };
    display: flex;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
    justify-content: space-between;
    padding: ${spacing.p300};
`

const InnerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${spacing.p300};
    font-weight: 700;
`

const Bold = styled.div`
    font-weight: 700;
`

const Table = () => {
    return (
        <InnerContainer>
            <Row>
                <h4>Treatment Duration</h4>
                <h4>Price</h4>
            </Row>
            <Row column>
                <InnerRow>
                    <Bold>30 minutes</Bold>
                    <Bold>£60</Bold>
                </InnerRow>
                <div>
                    Ideal for focused areas like the neck, shoulders, or a head massage
                </div>
            </Row>
            <Row>
                <Bold>60 minutes</Bold>
                <Bold>£100</Bold>
            </Row>
            <Row>
                <Bold>90 minutes</Bold>
                <Bold>£140</Bold>
            </Row>
        </InnerContainer>
    )
}

export default Table