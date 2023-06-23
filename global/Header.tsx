import Image from 'next/image'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import { spacing } from '../system'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface IProps {
    setStuck?: Dispatch<SetStateAction<boolean>>;
    stuck: boolean;
}

const HeaderContainer = styled.header<IProps>`
    text-align: center;
    padding: ${spacing.p600} 0 ${spacing.p400};
    ${({stuck}) => stuck ? `visibility: hidden` : null };
`

export default function Header ({ setStuck, stuck }: IProps) {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return
        const cachedRef = ref.current
        const observer = new IntersectionObserver(
            ([e]) => setStuck && setStuck(e.intersectionRatio < 1),
            { threshold: [1], rootMargin: "0px" }
        )

        observer.observe(cachedRef)
        return () => observer.unobserve(cachedRef)
    }, [ref, setStuck])

    return (
        <HeaderContainer ref={ref} stuck={stuck}>
            <Link href='/'>
                <Image
                    src={logo}
                    alt="logo"
                    width={175}
                />
            </Link>
        </HeaderContainer>
    )
}