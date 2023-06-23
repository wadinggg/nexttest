import styled from "styled-components"
import { color, spacing } from "../system"
import { BsList } from "react-icons/bs"
import logo from "../images/logo2.svg"
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"

interface IProps {
    stuck: boolean;
    setHidden: Dispatch<SetStateAction<boolean>>
}

interface IButtonProps {
    setHidden: Dispatch<SetStateAction<boolean>>
}

const Navigation = styled.div<IProps>`
    background-color: ${color.chroma.creme100};
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: ${spacing.p300};
    border-bottom: 2px solid ${color.chroma.brown100};
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
    border: 2px solid ${color.chroma.brown100};
    border-radius: 50px;
    // font-weight: bold;
    padding: ${spacing.p100} ${spacing.p500};
    margin-left: auto;
`

const Logo = styled.a`
    justify-self: center;
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
                        width={25}
                    />
                </Logo>
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