import { color, spacing } from "../../system"
import { ReactNode } from "react"
import styled from "styled-components"

interface IProps {
    children?: ReactNode
}

const Container = styled.div`
    border: 2px solid ${color.chroma.brown100};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: ${spacing.p500} ${spacing.p500} ${spacing.p700} ;
    margin-bottom: ${spacing.p700};

    &:last-child {
        margin-bottom: 0;
        @media (min-width: 768px) {
            margin-bottom: ${spacing.p700};
        }
    }
`

export default function Review ({ children }: IProps) {
    return (
        <Container>{children}</Container>
    )
}