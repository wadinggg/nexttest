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
import { font, spacing } from "../../system";

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

export default function Contact ({ innerRef }: IProps) {
    return (
        <ContactContainer ref={innerRef}>
            <H2>Find Us</H2>
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
            <Availability>
                <H33>Availability</H33>
                <Day>
                    <div>Monday</div>
                    <div>9am - 8.30pm</div>
                </Day>
                <Day>
                    <div>Tuesday</div>
                    <div>9am - 8.30pm</div>
                </Day>
                <Day>
                    <div>Wednesday</div>
                    <div>9am - 1pm</div>
                </Day>
                <Day>
                    <div>Thursday</div>
                    <div>9am - 8.30pm</div>
                </Day>
            </Availability>
            <SocialMedia>
                <Media>
                    <MIcon><BsEnvelope /></MIcon>
                    <div>
                        email@email.com
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
                        @instagram
                    </div>
                </Media>
            </SocialMedia>
        </ContactContainer>
    )
}