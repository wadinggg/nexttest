import styled from "styled-components"
import { color, spacing } from "../system"
import { BsList } from "react-icons/bs"
import logo from "../images/logo.svg"
import logo2 from "../images/logo2.svg"
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import Link from "next/link"

interface IProps {
    stuck: boolean;
    setHidden: Dispatch<SetStateAction<boolean>>
}

interface IButtonProps {
    setHidden: Dispatch<SetStateAction<boolean>>
}

const Navigation = styled.div<IProps>`
    background-color: ${color.greyscale.g100};
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: ${spacing.p300};
    border-bottom: 2px solid ${color.greyscale.g900};
    // align-items: center;
    display: ${({stuck}) => stuck ? `flex` : `none`};
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
`
const InnerNav = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
`

const NavButton = styled.button`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    margin-right: auto;
`

const BookButton = styled.a`
    color: inherit;
    text-decoration: none;
    border: 2px solid ${color.greyscale.g900};
    border-radius: 50px;
    // font-weight: bold;
    padding: ${spacing.p100} ${spacing.p500};
    margin-left: auto;
`

const Logo = styled(Link)`
    justify-self: center;
    display: inline;
    // @media (min-width: 768px) {
    //     display: inline;
    // }
`

const Logo2 = styled(Link)`
    justify-self: center;
    display: inline;
    display: none;
    // @media (min-width: 768px) {
    //     display: none;
    // }
`

export default function Nav ({ stuck, setHidden }: IProps) {

    return (
        <Navigation stuck={stuck} setHidden={setHidden}>
            <InnerNav>
                <NavButton onClick={() => setHidden(false)}>
                    <BsList size={30} />
                </NavButton>
                <Logo href='/'>
                    <img
                        src={logo.src}
                        alt="logo"
                        width={150}
                    />
                </Logo>
                <Logo2 href='/'>
                    <img
                        src={logo2.src}
                        alt="logo"
                        width={25}
                    />
                </Logo2>
                <BookButton 
                    href="https://marta-suchanska.uk2.cliniko.com/bookings" 
                    target='_blank'
                >
                    Book
                </BookButton>
            </InnerNav>
        </Navigation>
    )
}