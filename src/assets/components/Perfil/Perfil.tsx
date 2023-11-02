import { useState } from 'react'
import { SetaDireita, SetaEsquerda, Geral, BotaoPerfil, Apresentacao, Profissional, Foto, Nome, Funcao, Sobre, Educacao, Titulo, Formacao, Duracao, Contato, Item, Lista, Link, Whats, Email, Linkedin, Github } from './Perfil.style'

export default function Perfil() {

    const [seta, setSeta] = useState(false)
    const mudaSeta = () => {
        setSeta(!seta)
    }

    return (
        <Geral>
            <Profissional menu={seta? 'fechado' : 'aberto'}>
                <Apresentacao>
                    <Foto></Foto>
                    <Nome>Deivid<br/>Barreto</Nome>
                    <Funcao>Desenvolvedor Front-End</Funcao>
                    <Sobre>
                        Sou um desenvolvedor web altamente qualificado e experiente, com mais de 5 anos de experiência em projetos de desenvolvimento de sites e aplicativos web.
                    </Sobre>
                </Apresentacao>
                <Educacao>
                    <Titulo>Educação</Titulo>
                    <div>
                        <Formacao>CE Affonso Pena</Formacao>
                        <Duracao>2020 - 2022</Duracao>
                    </div>

                    <div>
                        <Formacao>Estácio de Sá - ADS</Formacao>
                        <Duracao>2023 - momento</Duracao>
                    </div>
                </Educacao>

                <Contato>
                    <Titulo>Contato</Titulo>
                    <Lista>
                        <Item><Whats /><Link href='https://wa.me/5521977201714' target='_blank'>(21) 97720-1714</Link></Item>
                        <Item><Email /><Link href='mailto:deividbarreto57@gmeil.com' target='_blank'>deividbarreto57@gmail.com</Link></Item>
                        <Item><Linkedin /><Link href='https://www.linkedin.com/in/deivid-barreto-789987259' target='_blank'>Linkedin</Link></Item>
                        <Item><Github /><Link href='https://github.com/Deividb2' target='_blank'>GitHub</Link></Item>
                    </Lista>
                </Contato>
            </Profissional>
            <BotaoPerfil onClick={() => mudaSeta()}>
                {seta? <SetaDireita /> : <SetaEsquerda />}
            </BotaoPerfil>
        </Geral>
    )
}