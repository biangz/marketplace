import React, { useMemo } from 'react';
import { createGlobalStyle, css } from 'styled-components'
import { transparentize } from 'polished'

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode) {
  return {
    // base
    white,
    black,

    height: '64px',
    height2: '700px',

    // text
    main: '#ebb94c',
    text1: '#ffffff',
    text2: '#ffffff4d',
    text3: '#ffffff80',
    text4: '#ffffffb3',
    text5: '#ffffffe6',

    // backgrounds / greys
    bg1: '#090808',
    bg2: '#F7F8FA',
    bg3: '#EDEEF2',
    bg4: '#CED0D9',
    bg5: '#888D9B',

    //primary colors
    primary1: '#1559ed',
    primary2: '#FF8CC3',
    primary3: '#FF99C9',
    primary4: '#F6DDE8',
    primary5: '#eaecfd',

    //specialty colors
    modalBG: 'rgba(0,0,0,0.3)',
    advancedBG: 'rgba(255,255,255,0.6)',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',

  }
}

const device = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
}
function media() {
  return {
    sm: (...args) => css`
      @media (max-width: ${device.sm}) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (max-width: ${device.md}) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (max-width: ${device.lg}) {
        ${css(...args)};
      }
    `,
    xl: (...args) => css`
      @media (max-width: ${device.xl}) {
        ${css(...args)};
      }
    `,
    xxl: (...args) => css`
      @media (max-width: ${device.xxl}) {
        ${css(...args)};
      }
    `,
  }
}

export function theme(darkMode = false) {
  return {
    ...colors(darkMode),
    ...media(),
  }
}

export const FixedGlobalStyle = createGlobalStyle`
:root {
  --font-family: 'Titillium Web',Helvetica,Arial,sans-serif;
  font-family: var(--font-family);
}
html,body, button {
  font-weight: 400;
  letter-spacing: -0.018em;
}
html, 
body,
h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}

button {
  user-select: none;
  line-height: 1;
}

html {
  font-size: 14px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg1};

  @media (max-width: 765px) {
    font-size: 12px;
  }
}
`