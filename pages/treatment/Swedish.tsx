

import styled from "styled-components";
import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { color, font, spacing } from "../../system";
import { BsArrowLeftShort } from "react-icons/bs";
import photo from "../../images/classic.jpg";
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
        color: ${color.chroma.brown100};
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
    border: 2px solid ${color.chroma.brown100};
    border-radius: 50px;
    font-weight: 500;
    padding: ${spacing.p200} ${spacing.p400}
`

export default function Swedish () {
    return (
        <div>
            <Back><Link href="/"><BsArrowLeftShort size={30}/><span>back</span></Link></Back>
            <SectionContainer>
                <H2>
                    Classic/Swedish Massage
                </H2>
                <InfoContainer>
                    <IMG
                        src={photo.src}
                        alt="logo"
                        width={150}
                    />
                    <div>
                        <P>
                            Elevate your strength and stamina with our sports and injury recovery massage. This dynamic treatment uses firm pressure to manipulate soft connective tissues, like tendons, ligaments, and muscles. Perfect for those leading an active lifestyle, seeking to boost their performance, prevent injuries, or expedite recovery time.
                        </P>
                        <UL>
                            <li>Relieves tension</li>
                            <li>Boosts immunity</li>
                            <li>Stimulates nerves</li>
                            <li>Improves mood</li>
                            <li>Eases chronic pain</li>
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