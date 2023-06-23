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
import pregnancyBg from "../../images/pregnancy.jpg"
import { MutableRefObject } from "react";
import styled from "styled-components";
import { spacing } from "../../system";

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
                <Treatment bg={deepBg.src}>
                    <InnerContainer>
                        <h3>Deep Tissue/Remedial Massage</h3>
                        <p>
                            Experience Restorative Calm, Release Deep-Seated Tension
                        </p>
                    </InnerContainer>
                    <LearnMore href="/treatment/deep-tissue">Learn more</LearnMore>
                </Treatment>
                <Treatment bg={sportsBg.src}>
                    <InnerContainer>
                    <h3>Sports/Injury Recovery Massage</h3>
                        <p>
                            Boost Performance, Expedite Recovery for Peak Vitality
                        </p> 
                    </InnerContainer>
                    <LearnMore href="/treatment/sports-injury">Learn more</LearnMore>
                </Treatment>
                <Treatment bg={classicBg.src}>
                    <InnerContainer>
                        <h3>Classic/Swedish Massage</h3>
                        <p>
                            Reinvigorate Health, Embrace Energizing Serenity
                        </p>  
                    </InnerContainer>
                    <LearnMore href="/treatment/swedish-massage">Learn more</LearnMore>
                </Treatment>
                <Treatment bg={relaxBg.src}>
                    <InnerContainer>
                        <h3>Relaxing/Holistic Massage</h3>
                        <p>
                            Escape the Hustle, Indulge in Pure Relaxation
                        </p> 
                    </InnerContainer>
                    <LearnMore href="/treatment/holistic-massage">Learn more</LearnMore>
                </Treatment>
                <Treatment bg={pregnancyBg.src}>
                    <InnerContainer>
                        <h3>Pregnancy Massage</h3>
                        <p>
                            Embrace the Journey, Nurture Motherhood with Care
                        </p> 
                    </InnerContainer>
                    <LearnMore href="/treatment/pregnancy">Learn more</LearnMore>
                </Treatment>
                <Treatment bg={manualBg.src}>
                    <InnerContainer>
                        <h3>Manual Lymphatic Drainage</h3>
                        <p>
                            Detox and Unwind, Revitalize with Gentle Stimulation
                        </p>  
                    </InnerContainer>
                    <LearnMore href="/treatment/lymphatic">Learn more</LearnMore>
                </Treatment>
            </TreatmentGrid>
        </SectionContainer>
    )
}