import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    ${({ theme }) => `
    color: ${theme.colors.white};
    background: radial-gradient(circle, rgba(59,157,82,1) 35%, rgba(44,117,61,1) 100%);
`};
    font-family: roboto-regular, sans-serif;
}

a,
button {
    cursor: pointer;
}

h1,
h2,
h3,
h4 {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

// scroll-bar:
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    @include for-mobile-layout {
        width: 5px;
        height: 5px;
    }
}

::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}

::-webkit-scrollbar-thumb {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 48px;
    &:active {
        background: #c4c4c4;
    }
}

::-webkit-scrollbar-track {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 43px;
    &:hover {
        background: lighten(#666666, 30);
    }
    &:active {
        background: #333333;
    }
}

::-webkit-scrollbar-corner {
    background: transparent;
}

`;
