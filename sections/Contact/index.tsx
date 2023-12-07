import H2 from "../../global/H2";
import SectionContainer from "../../global/SectionContainer";
import { 
    BsEnvelope,
    BsTelephone,
    BsInstagram
} from "react-icons/bs";
import Address from "./Address";
import H3 from "../../global/H3";
import Day from "./Day";
import SocialMedia from "./SocialMedia";
import Media from "./Media";
import MIcon from "./MIcon";
import Italic from "./Italic";
import styled from "styled-components";
import { MutableRefObject } from "react";
import { color, font, spacing } from "../../system";
import img from "../../images/findUs.jpg";

interface IProps {
    innerRef?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

const ContactContainer = styled(SectionContainer)`
    font-size: ${font.size.s500};
`

const Availability = styled.div`
    margin-bottom: ${spacing.p700};
`

const H33 = styled(H3)`
    margin-bottom: ${spacing.p400};
`

const IMG = styled.img`
    width: 100%;
    border-radius: 15px;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`

const IMGCont = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const IMG2 = styled.div`
    img { 
        width: 100%;
        border-radius: 15px;
    }

    margin-bottom: ${spacing.p300};
    margin-top: ${spacing.p700};

    @media(min-width: 768px) {
        display: none;
    }
`

const Cont = styled.div<IProps>`
    background-color: ${color.greyscale.g100};
    color: ${color.greyscale.g900};
`

const Inner = styled(SectionContainer)`
`

export default function Contact ({ innerRef }: IProps) {
    return (
        <Cont ref={innerRef}>
            <Inner>
                <H2>Find Us</H2>
                <Top>
                    <div>
                        <Address>
                            <Italic>Main Location</Italic><br />
                            Light Centre Marylebone<br />
                            Lower Ground<br />
                            49 Marylebone High St<br />
                            London<br />
                            W1U 5HJ
                        </Address>
                        <Address>
                            <Italic>By Request Only</Italic><br />
                            Light Centre Monument<br />
                            36 St Mary at Hill<br />
                            London<br />
                            EC3R 8DU
                        </Address>
                    </div>
                    <IMGCont>
                        <IMG src={img.src} />
                    </IMGCont>
                </Top>
                <Availability>
                    <H33>Availability</H33>
                    <Day>
                        <div>Monday</div>
                        <div>9am - 8.30pm</div>
                    </Day>
                    <Day>
                        <div>Wednesday</div>
                        <div>9am - 4.30pm</div>
                    </Day>
                    <Day>
                        <div>Friday</div>
                        <div>9am - 8.30pm</div>
                    </Day>
                    <Day>
                        <div>Sunday</div>
                        <div>10am - 3pm</div>
                    </Day>
                </Availability>
                <SocialMedia>
                    <Media>
                        <MIcon><BsEnvelope /></MIcon>
                        <div>
                            <a href="mailto: marta@massagetherapy.london">marta@massagetherapy.london</a>
                        </div>
                    </Media>
                    <Media>
                        <MIcon><BsTelephone /></MIcon>
                        <div>
                            0750 228 7115
                        </div>
                    </Media>
                    <Media>
                        <MIcon><BsInstagram /></MIcon>
                        <div>
                            <a href="http://www.instagram.com/massagetherapy.london">massagetherapy.london</a>
                        </div>
                    </Media>
                </SocialMedia>
                <IMG2>
                    <IMG src={img.src} />
                </IMG2>
            </Inner>
        </Cont>
    )
}