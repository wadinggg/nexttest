import styled from 'styled-components'
import { color, spacing } from '../system'
import { MutableRefObject } from 'react'

interface IProps {
    ref?: MutableRefObject<HTMLDivElement | null>
    handleClick?: () => void;
}

const SectionContainer = styled.div<IProps>`
    padding: ${spacing.p500} ${spacing.p500} ${spacing.p800};
    border-bottom: 1px solid ${color.chroma.brown100};
    position: relative;

    p { 
        max-width: 30em;
    }

    &:last-child {
        border-bottom: 0;
    }

    max-width: 1300px;

    @media (min-width: 1200px) {
        margin: 0 auto;
    }
`

export default SectionContainer