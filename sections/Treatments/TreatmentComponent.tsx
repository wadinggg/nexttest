import { styled } from "styled-components"
import { color, spacing } from "../../system";

interface IbgProps {
    bg: string;
}

interface ITreatmentProps {
    bg: string;
    href: string;
}

const BgContainer = styled.div<IbgProps>`
    background-image: ${({bg}) => `url(${bg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 2px solid ${color.greyscale.g900};
    border-radius: 25px;
    margin-bottom: ${spacing.p800};
    &:last-child {
        margin-bottom: 0;

        @media (min-width: 768px) {
            margin-bottom: ${spacing.p800};
        }
    }

    h3 {
        margin-bottom: ${spacing.p400};
    }
`

const Info = styled.div`
    background-color: ${color.greyscale.g100};
    text-align: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: ${spacing.p400} 0;
`

const LearnMore = styled.a`
    color: ${color.greyscale.g900};
    border: 2px solid ${color.greyscale.g900};
    padding: ${spacing.p100} ${spacing.p300};
    display: inline-block;
    border-radius: 25px;
    text-decoration: none;
`

const TreatmentComponent = ({
    bg,
    title,
    href
}) => {
    return (
        <BgContainer bg={bg}>
            <Info>
                <h3>{title}</h3>
                <LearnMore href={href}>Learn more</LearnMore>
            </Info>
        </BgContainer>
    )
}

export default TreatmentComponent