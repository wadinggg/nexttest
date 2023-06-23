import SectionContainer from '../global/SectionContainer'
import styled from 'styled-components'
import { font, spacing } from '../system'
import bg from '../images/branding.jpg'

interface IProps {
    stuck: boolean;
}

const MarketingContainer = styled(SectionContainer)<IProps>`
    margin-top: ${spacing.p700};
    text-align: center;
    border-bottom: 0;
    p {
        max-width: 100%;
    }
    @media (max-width: 768px) {
        ${({ stuck }) => stuck ? `padding-right: 0; padding-left: 0;` : null};
    }
`
const BookButton = styled.a<IProps>`
    margin-top: auto;
    margin-bottom: ${spacing.p700};
    color: inherit;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 50px;
    font-weight: bold;
    align-self: center;
    padding: ${spacing.p200} ${spacing.p400};
    @media (max-width: 768px) {
        ${({ stuck }) => stuck ? `visibility: hidden` : null};
    }
`
const TaglineContainer = styled.div<IProps>`
    color: white;
    border-radius: 20px;
    @media (max-width: 768px) {
        border-radius: ${({ stuck }) => stuck ? `0` : `20px`};
    }
    height: 350px; 
    background-image: url(${bg.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const Blur =  styled.div<IProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 20px;
    @media (max-width: 768px) {
        border-radius: ${({ stuck }) => stuck ? `0` : `20px`};
    }
    background: hsla(0, 0%, 48%, 0.5);
    backdrop-filter: blur(4px);
    z-index: 1;
`
const OnTop = styled.div`
    position: relative;
    z-index: 500;
    height: 100%;
    width: 100%;
    padding-top: 25%;
    display: flex;
    flex-direction: column;
    font-weight: 500;

    @media (min-width: 768px) {
        padding-top: 15%;
    }

    @media (min-width: 992px) {
        padding-top: 10%;
    }
`
const Tagline = styled.p`
    font-size: ${font.size.s600};
    line-height: 2;
`

export default function Marketing ({ stuck }: IProps) {
    return (
        <MarketingContainer stuck={stuck}>
            <TaglineContainer stuck={stuck}>
                <Blur stuck={stuck}></Blur>
                <OnTop>
                   <Tagline>
                        Uncover Profound Healing Through Intuitive Touch
                    </Tagline>
                    <BookButton 
                        href="https://marta-suchanska.uk2.cliniko.com/bookings" 
                        target='_blank'
                        stuck={stuck}
                    >
                        Book a Session
                    </BookButton> 
                </OnTop>
            </TaglineContainer>
        </MarketingContainer>
    )
}