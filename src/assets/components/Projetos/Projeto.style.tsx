import styled from 'styled-components'
import { cores } from '../../../GlobalStyle'
// import Perfil from '../../../../public/images/perfil.jpg'
import Foto1 from '../../../../public/images/loja-ds.png'

export const Test = styled.main `
    margin: 1rem 0;
    @media (min-width: 640px) {
        display: flex;
        justify-content: center;
    }
`

export const Test2 = styled.section `
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 35vh;
    gap: 1.5rem;
    padding: 1rem;

    background-color: ${cores.cinza[100]};
    outline: 1px solid ${cores.branco[100]}; 
    width: 100vw;

    @media (min-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 980px) {
        width: 85vw;
    }

    @media (min-width: 1200px) {
        width: 75vw;
    }
`

export const Projeto = styled.div `
    background: ${(props) => props.foto ? `url(${props.foto}) no-repeat center / cover` : '#353535'};
    position: relative;
    overflow: hidden;
    transition: all .5s ease;
    display: flex;
    flex-direction: column;
    
    &:hover {
        transform: scale(1.01);
    }
`

export const Nome = styled.span `
    background-color: aliceblue;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Infos = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease; 
    opacity: 0;

    @media (min-width: 640px) {
        display: flex;
        justify-content: center; 
        align-items: flex-end;
        gap: 1rem;
        &:hover {
            opacity: 1;
            background-color: #fffefe4e;
        }
    }

`

export const Link = styled.a `
    text-decoration: none;
    padding: .7rem 2rem;
    margin-bottom: 1rem;
    border: 1px solid #000;
    transition: all .2s ease;
    color: ${cores.preto[100]};

    &:hover {
        transform: scale(1.05);
    }
`