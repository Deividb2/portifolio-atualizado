import styled from 'styled-components'
import Perfil from '../../../../public/images/perfil.jpg'
import { cores } from '../../../GlobalStyle'

import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export const Geral = styled.main `
    min-height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 2;
    zoom: 90%;

    @media (min-width: 500px) {
        width: 65vw;
    }

    @media (min-width: 700px) {
        width: 45vw;
    }

    @media (min-width: 800px) {
        width: 35vw;
    }
`

export const BotaoPerfil = styled.div `
    position: fixed;
    left: 0;
    top: 0; 
    background-color: ${cores.preto[100]};
    color: ${cores.verde};
    padding: .7rem;
    border-bottom-right-radius: 50%;

    @media (min-width: 380px) {
        border-right: 2px solid ${cores.verde};
        border-bottom: 2px solid ${cores.verde};
    }
`

export const SetaDireita = styled(MdArrowForwardIos) `
    font-size: 2rem;
`

export const SetaEsquerda = styled(MdArrowBackIosNew) `
    font-size: 2rem;
`

export const Profissional = styled.section `
    height: 100%;
    width:100%;
    padding: 3rem 1rem;
    background-color: ${cores.preto[100]};
    color: ${cores.branco[100]};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;  
    transition: all .5s ease;
    
    ${
        (props) => {
            if(props.menu === 'fechado')
                return (`transform: translateX(-100%)`)
            else return (`transform: translateX(0)`)
        }
    }
`

export const Apresentacao = styled.section `
    display: flex;
    flex-direction: column;
`

export const Foto = styled.div `
    align-self: center;
    background: url(${Perfil}) no-repeat center / cover;
    height: 10rem;
    width: 10rem;
    border-radius: 100%;
    outline: 4px solid ${cores.verde};
    margin-bottom: 1rem;
`

export const Nome = styled.h2 `
    font-size: 2.5rem;
`

export const Funcao = styled.h4 `
    color: ${cores.verde};
    font-size: 1rem;
    margin: .7rem 0;
`

export const Sobre = styled.p `
    font-size: 0.9rem;
    font-weight: 300;
`

export const Educacao = styled.section `
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Titulo = styled.h3 `
    color: ${cores.verde};
    text-transform: uppercase;
    font-size: 1rem;
`

export const Formacao = styled.h4 `
    font-style: italic;
    font-weight: 300;
    font-size: 0.9rem;
`

export const Duracao = styled.h4 `
    font-weight: 300;
    font-size: 0.9rem;
    color: ${cores.cinza[100]};
`

export const Contato = styled.section `
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Lista = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .6rem;
`

export const Item = styled.li `
    display: flex;
    align-items: center;
    gap: .4rem;

    &:hover {
        color: ${cores.verde};
    }
`

export const Link = styled.a `
    font-size: 0.9rem;
    color: ${cores.cinza[100]};
    text-decoration: none;
`

// ÍCONES DE CONTATO
export const Whats = styled(BsWhatsapp) ``
export const Email = styled(AiOutlineMail) ``
export const Linkedin = styled(AiFillLinkedin) ``
export const Github = styled(AiFillGithub) ``