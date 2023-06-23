''

import Image from 'next/image'
import membership from '../images/membership.jpg'
import styled from 'styled-components'
import { spacing } from '../system'

const FooterContainer = styled.footer`
    text-align: center;
    padding: ${spacing.p800} 0 ${spacing.p700};

    img {
        margin-bottom: ${spacing.p700};
    }
`

export default function Footer () {
    return (
        <FooterContainer>
            <Image
                src={membership}
                alt="membership image"
                width={100}
            />
            <div>copyright ©2023 MɅSSɅGE</div>
        </FooterContainer>
    )
}