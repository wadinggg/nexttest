import styled from "styled-components";
import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { color, font, spacing } from "../../system";
import { BsArrowLeftShort } from "react-icons/bs";
import photo from "../../images/pregnancy.jpg";
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

export default function Pregnancy () {
    return (
        <div>
            <Back><Link href="/"><BsArrowLeftShort size={30}/><span>back</span></Link></Back>
            <SectionContainer>
                <H2>
                    Pregnancy Massage
                </H2>
                <InfoContainer>
                    <IMG
                        src={photo.src}
                        alt="logo"
                        width={150}
                    />
                    <div>
                        <P>
                            Pregnancy is a unique time, marked by dynamic bodily changes. Our pregnancy massage, suitable from the 12th week, takes special care of expecting mothers, providing relief from muscle and joint pain and aiding better sleep.
                        </P>
                        <UL>
                            <li>Reduces stress</li>
                            <li>Relieves muscle and joint pain</li>
                            <li>Improves blood and lymph circulation</li>
                            <li>Prevents swelling, stretch marks</li>
                            <li>Promotes better sleep</li>
                            <li>Reduces headaches</li>
                            <li>Helps maintain better posture</li>
                            <li>Boosts mood</li>
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