import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import InnerContainer from "./InnerContainer";
import LearnMore from "./LearnMore";
import Treatment from "./Treatment";
import deepBg from "../../images/deep.jpg";
import sportsBg from "../../images/sports.jpg"
import classicBg from "../../images/classic.jpg"
import relaxBg from "../../images/relax.jpg"
import manualBg from "../../images/manual.jpg"
import lymphBg from "../../images/lymph.jpg"
import pregnancyBg from "../../images/pregnancy.jpg"
import { MutableRefObject } from "react";
import styled from "styled-components";
import { spacing } from "../../system";
import TreatmentComponent from "./TreatmentComponent";

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

const TreatmentGrid =  styled.div`
    display: grid;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr min-content;
        gap: ${spacing.p600};
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: ${spacing.p700};
    }
`

export default function Treatments ({ innerRef }: IProps) {
    return (
        <SectionContainer ref={innerRef}>
            <H2>Our Treatments</H2>
            <TreatmentGrid>
                <TreatmentComponent 
                    title="Deep Tissue/Remedial Massage"
                    href="/treatment/deep-tissue"
                    bg={deepBg.src} 
                />
                <TreatmentComponent 
                    title="Sports/Injury Recovery Massage"
                    href="/treatment/sports-injury" 
                    bg={sportsBg.src} 
                />
                <TreatmentComponent 
                    title="Classic/Swedish Massage"
                    href="/treatment/swedish-massage" 
                    bg={classicBg.src} 
                />
                <TreatmentComponent 
                    title="Relaxing/Holistic Massage"
                    href="/treatment/holistic-massage" 
                    bg={relaxBg.src} 
                />
                <TreatmentComponent 
                    title="Pregnancy Massage"
                    href="/treatment/pregnancy" 
                    bg={pregnancyBg.src} 
                />
                <TreatmentComponent 
                    title="Manual Lymphatic Drainage"
                    href="/treatment/lymphatic" 
                    bg={lymphBg.src} 
                />
            </TreatmentGrid>
        </SectionContainer>
    )
}