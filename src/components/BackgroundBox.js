import React from 'react'
import { ColorBox } from './ColorBox'
import styled from 'styled-components'

export const BackgroundBox = () => {
    return (
        <StyledBackgroundBox>
            <ColorBox></ColorBox>
            <ColorBox></ColorBox>
            <ColorBox></ColorBox>
            <ColorBox></ColorBox>
        </StyledBackgroundBox>
    )
}

const StyledBackgroundBox = styled.div`
background:red;
padding: 25px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 25px;
`