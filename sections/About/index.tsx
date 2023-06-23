import H2 from "../../global/H2";
import LearnMore from "./LearnMore";
import SectionContainer from "../../global/SectionContainer";
import P from "./P";
import { MutableRefObject } from "react";

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

export default function About ({ innerRef }: IProps) {
    return (
        <SectionContainer ref={innerRef}>
            <H2>Our Practitioner</H2>
            <P>
                Explore the healing touch of Marta Suchanska, founder of MɅSSɅGE. A holistic manual therapist with over a decade&apos;s experience, Marta brings together multidisciplinary approaches to offer tailored treatments. With a focus on root-cause healing, she&apos;s here to guide you towards better health.
            </P>
            <LearnMore href="/about">Learn more</LearnMore>
        </SectionContainer>
    )
}