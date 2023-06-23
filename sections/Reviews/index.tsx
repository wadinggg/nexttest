import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { BsQuote } from "react-icons/bs";
import Review from "./Review";
import styled from "styled-components";
import { font, spacing } from "../../system";
import { MutableRefObject, RefObject } from "react";

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

const Quotation = styled.div`
    font-size: ${font.size.s300};
`

const Quote = styled.p`
    margin-bottom: ${spacing.p500};
    margin-top: ${spacing.p200};
    font-weight: 700;
    line-height: 1.8;
`

const Client = styled.div`
    font-style: italic;
`

const Name = styled.span`
    font-weight: 700;
`

const ReviewWrapper = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr min-content;
        gap: ${spacing.p600};
    }
`

export default function Reviews ({ innerRef }: IProps) {
    return (
        <SectionContainer ref={innerRef}>
            <H2>Reviews</H2>
            <ReviewWrapper>
                <Review>
                    <Quotation><BsQuote size={50} /></Quotation>
                    <Quote>
                        Over the years I&apos;ve had the privilege to work with some of the best therapists in London.
                        Providing unique services to the some of the world&apos;s top A-listers is never easy. To say that
                        Marta is the best masseuse in London is an understatement. Marta is so much more; she
                        tailors her experience to your personal condition. She genuinely makes you feel better, and
                        you soon discover that your serious injuries and health issues can become perfectly
                        manageable with her holistic approach.
                    </Quote>
                    <Client>
                        <Name>Michal Beneda</Name><br />
                        Head Concierge at The Carlton Tower Jumeirah,<br />
                        Member of Les Clefs d&apos;Or Great Britain
                    </Client>
                </Review>
                <Review>
                    <Quotation><BsQuote size={50} /></Quotation>
                    <Quote>
                        I frequently visit Marta for massage treatments. She is extremely knowledgeable and
                        knows what she is doing. A massage with Martha always left me pain free :) She puts in a lot
                        of effort to make sure the client gets the best results from her treatments. She is also a
                        great person and always accommodated my request for booking, sometimes even at short
                        notice. I highly recommend Marta!
                    </Quote>
                    <Client>
                        <Name>Dr. Sufia Askari</Name><br />
                        Managing Director, Sight and Life
                    </Client>
                </Review>
                <Review>
                    <Quotation><BsQuote size={50} /></Quotation>
                    <Quote>
                        We have followed Marta from her time at Kensington clinic and can highly recommend her
                        very professional massage skills and knowledge of her craft. The treatments are very
                        satisfying, and we always come away feeling relaxed and refreshed.
                    </Quote>
                    <Client>
                        <Name>Gary Wyatt</Name> (Wyatts Chartered Accountants)
                        &amp; <Name>Lea Kristensen</Name> (Psychotherapist)
                    </Client>
                </Review>
                <Review>
                    <Quotation><BsQuote size={50} /></Quotation>
                    <Quote>
                        I have been a regular client for the last 18 months. I can recommend Marta; she is both very
                        professional and charming.
                    </Quote>
                    <Client>
                        <Name>Alexander Michell</Name><br />
                        Retired banker
                    </Client>
                </Review>
            </ReviewWrapper>
        </SectionContainer>
    )
}