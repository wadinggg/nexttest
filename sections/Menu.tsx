import { GrClose } from "react-icons/gr";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { color, font, spacing } from "../system";
import H2 from "../global/H2";
import Link from "next/link";

interface IProps {
    hidden: boolean
    setHidden: Dispatch<SetStateAction<boolean>>
    clickhandlers?: {
        treatment: () => void;
        pricing: () => void;
        about: () => void;
        review: () => void;
        contact: () => void;
        inquiry: () => void;
    }
    handleTreatment: () => void;
    handlePricing: () => void;
    handleAbout: () => void;
    handleReviews: () => void;
    handleContact: () => void;
    handleInquiry: () => void;
}

interface IProps2 {
    hidden: boolean
    setHidden: Dispatch<SetStateAction<boolean>>
}

const MenuContainer = styled.div<IProps2>`
    position: fixed;
    display: ${({ hidden }) => hidden ? `none` : `flex`};
    flex-direction: column;
    z-index: 2000;
    background-color: ${color.greyscale.g100};
    width: 100vw;
    height: 100vh;
    padding: ${spacing.p300};
`

const CloseButton = styled.button`
    align-self: flex-start;
    margin-bottom: ${spacing.p300};
    background-color: ${color.greyscale.g100};
    color: inherit;
    border: none;
`

const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
        margin-bottom: ${spacing.p600};
        font-size: ${font.size.s600};

        button {
            text-decoration: none;
            color: inherit;
            font-size: ${font.size.s600};
            background-color: inherit;
            border: none;
            cursor: pointer;
        }
    }
`

const StyledH2 = styled(H2)`
    margin-bottom: ${spacing.p700};
`

const InnerContainer = styled.div`
    padding: 0 ${spacing.p500}
    max-width: 1300px;

    @media (min-width: 768px) {
        margin: 0 auto;
        text-align: center;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default function Menu ({ 
    hidden, 
    setHidden, 
    handleAbout, 
    handleContact, 
    handleInquiry, 
    handlePricing,
    handleReviews,
    handleTreatment
}: IProps) {
    return (
        <MenuContainer hidden={hidden} setHidden={setHidden}>
            <CloseButton onClick={() => setHidden(true)}><GrClose size={30} /></CloseButton>
            <InnerContainer>
                <UL>
                    <li>
                        <button onClick={(e) => {e.preventDefault(); setHidden(true); handleTreatment()}}>OUR TREATMENTS</button>
                    </li>
                    <li>
                        <button onClick={(e) => {e.preventDefault(); setHidden(true); handlePricing()}}>PRICING</button>
                    </li>
                    <li>
                        <button onClick={(e) => {e.preventDefault(); setHidden(true); handleAbout()}}>OUR PRACTITIONER</button>
                    </li>
                    <li>
                        <button onClick={(e) => {e.preventDefault(); setHidden(true); handleReviews()}}>REVIEWS</button>
                    </li>
                    <li>
                        <Link href='/about'>FIND US</Link>
                    </li>
                    {/* <li>
                        <button onClick={(e) => {e.preventDefault(); setHidden(true); handleInquiry()}}>- Got an Inquiry?</button>
                    </li> */}
                </UL>
            </InnerContainer>
        </MenuContainer>
    )
}