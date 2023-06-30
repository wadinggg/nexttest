import styled from "styled-components";
import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { color, font, spacing } from "../../system";
import { BsArrowLeftShort } from "react-icons/bs";
import photo from "../../images/deep.jpg";
import InfoContainer from "../../global/InfoContainer";
import Link from "next/link";

const P = styled.p`
    margin-bottom: ${spacing.p600};
    line-height: 1.8;
    font-size: ${font.size.s400};

    &:last-child {
        margin-bottom: 0;
    }

    &:first-child {
        margin-top: ${spacing.p500};
    }
`

const Back = styled.div`
    margin-top: ${spacing.p200};
    margin-left: ${spacing.p500};

    a {
        text-decoration: 0;
        color: ${color.greyscale.g900};
        font-weight: bold;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

const IMG = styled.img`
    width: 100%;
    border-radius: 15px;
    margin-bottom: ${spacing.p700};
`

const UL = styled.ul`
    margin-left: ${spacing.p500};
    margin-bottom: ${spacing.p800};
    font-size: ${font.size.s400};

    li {
        margin-bottom: ${spacing.p300};

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const BookButton = styled.a`
    margin-bottom: ${spacing.p700};
    color: inherit;
    text-decoration: none;
    border: 2px solid ${color.greyscale.g900};
    border-radius: 50px;
    font-weight: 500;
    padding: ${spacing.p200} ${spacing.p400}
`

export default function DeepTissue () {
    return (
        <div>
            <Back><Link href="/"><BsArrowLeftShort size={30}/><span>back</span></Link></Back>
            <SectionContainer>
                <H2>
                    Release Deep-Seated Tension
                </H2>
                <InfoContainer>
                    <IMG
                        src={photo.src}
                        alt="logo"
                        width={150}
                    />
                    <div>
                        <P>
                            Experience restorative calm through deep tissue massage—a treatment that offers both physical and mental relief. Through slow, deep strokes, this treatment targets the deep layers of muscle and surrounding tissues, releasing muscle pain and stiffness, improving circulation, and restoring the range of motion. Perfect for anyone experiencing muscle tension and pain from busy lifestyles or sports activities.
                        </P>
                        <UL>
                            <li>Releases muscle pain and stiffness</li>
                            <li>Improves circulation</li>
                            <li>Restores range of motion</li>
                            <li>Provides deep relaxation</li>
                        </UL>
                        <BookButton 
                            href="https://marta-suchanska.uk2.cliniko.com/bookings" 
                            target='_blank'
                        >
                            Book a Session
                        </BookButton>
                    </div>
                </InfoContainer> 
            </SectionContainer> 
        </div>
    )
}