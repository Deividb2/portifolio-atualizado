import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&display=swap');

    * {
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
        font-family: 'Red Hat Display', sans-serif;
    }
`

// Variáveis

export const fontes = {
    RedHat: "'Red Hat Display', sans-serif"
}

export const cores = {
    branco: {
        100: '#fff',
    },

    preto: {
        100: '#000',
        200: '#0c0c0c'
    },

    cinza: {
        100: '#ccc',
    },

    verde: '#7ED957',
}