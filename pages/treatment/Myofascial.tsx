

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

export default function Myofascial () {
    return (
        <div>
            <Back><Link href="/"><BsArrowLeftShort size={30}/><span>back</span></Link></Back>
            <SectionContainer>
                <H2>
                    Release Tightness and Pain
                </H2>
                <InfoContainer>
                    <IMG
                        src={photo.src}
                        alt="logo"
                        width={150}
                    />
                    <div>
                        <P>
                            {/* Discover the power of Clossic/Swedish Massage - a time-tested technique designed to bring you unparalleled relaxation and an array of health benefits. Boost your immune system, empowering your body&apos;s natural defences to keep you at your best. Classic massage is a safe and highly recommended treatment for everyone, regardless of age or physical condition. Whether you&apos;re seeking a moment of respite from a demanding lifestyle or looking to enhance your overall well-being, this massage is tailored just for you. */}
                            Experience the transformative power of myofascial release therapy, a holistic
                            treatment unlocking tension and restoring freedom of movement. This treatment uses gentle, sustained pressure to release tightness in the fascia. Discover relief
                            from chronic muscle stress, experience improved range of movement, and feel
                            rejuvenating effects of this specialized therapy.
                        </P>
                        <UL>
                            <li>Enhances flexibility</li>
                            <li>Reduces pain</li>
                            <li>Relaxes muscles</li>
                            <li>Boosts posture</li>
                            <li>Prevents injuries</li>
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