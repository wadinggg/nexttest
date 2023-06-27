import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import Table from "./Table";
import InnerContainer from "./InnerContainer";
import H4 from "../../global/H4";
import Bold from "../../global/Bold";
import { MutableRefObject } from "react";
import { styled } from "styled-components";
import { color, spacing } from "../../system";

interface IProps {
  innerRef?: MutableRefObject<HTMLDivElement | null>
  handleClick?: () => void;
}

const Cont = styled.div<IProps>`
  background-color: ${color.chroma.beige100};
  color: ${color.greyscale.g900};
  border-bottom: 1px solid ${color.greyscale.g900};
`

const Inner = styled(SectionContainer)`
`

export default function Pricing ({ innerRef }: IProps) {
    return (
      <Cont ref={innerRef}>
        <Inner>
          <H2>Pricing</H2>
          <Table />
          <InnerContainer>
            <H4>Savings</H4>
            <p>
              Get <Bold>10% off</Bold> your <Bold>first treatment</Bold>
            </p>
            <p>
              Get <Bold>10% off</Bold> when purchasing a <Bold>pack of 5 treatments</Bold> (to be used within 12 months)
            </p>
            <p>
              Gift vouchers available
            </p>
          </InnerContainer>
          <InnerContainer>
            <H4>How to Pay</H4>
            <p>Online (in advance)</p>
            <p>By card (at the clinic)</p>
            <p>With cash (at the clinic)</p>
          </InnerContainer>
          <InnerContainer>
            <H4>Cancellation Policy</H4>
            <p>
              Full refund available for cancellations made at least 24 hours before the appointment
            </p>
            <p>
              No changes or cancellations possible after this period; the full treatment price will be charged.
            </p>
          </InnerContainer>
        </Inner>
      </Cont>
    )
}