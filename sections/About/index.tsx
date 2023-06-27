import H2 from "../../global/H2";
import LearnMore from "./LearnMore";
import SectionContainer from "../../global/SectionContainer";
import P from "./P";
import { MutableRefObject } from "react";
import img from "../../images/marta.jpg";
import { styled } from "styled-components";
import { color, spacing } from "../../system";

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

const IMG = styled.div`
    img { 
        width: 100%;
        border-radius: 15px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const IMG2 = styled.div`
    img { 
        width: 100%;
        border-radius: 15px;
    }

    margin-bottom: ${spacing.p700};
    margin-top: 0;

    @media(min-width: 768px) {
        display: none;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`

const Cont = styled.div<IProps>`
  background-color: ${color.greyscale.g900};
  color: ${color.greyscale.g100};
`

const Inner = styled(SectionContainer)`
`

export default function About ({ innerRef }: IProps) {
    return (
        <Cont ref={innerRef}>
            <Inner>
                <H2>Our Practitioner</H2>
                <Top>
                    <div>
                        <P>
                            Explore the healing touch of Marta Suchanska, founder of MɅSSɅGE. A holistic manual therapist with over a decade&apos;s experience, Marta brings together multidisciplinary approaches to offer tailored treatments. With a focus on root-cause healing, she&apos;s here to guide you towards better health.
                        </P>
                        <IMG2>
                            <img src={img.src} />
                        </IMG2>
                        <LearnMore href="/about">Learn more</LearnMore>
                    </div>
                    <IMG>
                        <img src={img.src} />
                    </IMG>
                </Top>
            </Inner>
        </Cont>
    )
}