import { Test, Test2, Projeto, Nome, Infos, Link } from "./Projeto.style";
import FitnessGym from '../../../../public/images/fitnessGym.png'
import LojaDani from '../../../../public/images/loja-ds.png'
import Cafeteria from '../../../../public/images/cafeteria.png'
import Carpintaria from '../../../../public/images/carpintaria.png'
import CarrosVintage from '../../../../public/images/carrosVintage.png'

// '../../../../public/images'

export default function Projetos() {
    return (
        <>
        <Test>
            <Test2>
                {dadosProjetos.map((elemento) => <ProjetoContainer dados={elemento} /> )}
            </Test2>
        </Test>
        </>
    );
}

const ProjetoContainer = ({dados}) => {
    return (
        <>
        <Projeto foto={dados.imgSrc}>
            <Infos>
                <Link href={dados.linkGitHub} target="_blank">Github</Link>
                <Link href={dados.linkProjeto} target="_blank">Projeto</Link>
            </Infos>
            <Nome>{dados.nome}</Nome>
        </Projeto>
        </>
    );
};

const dadosProjetos = [
    {
        nome: 'Fitness GYM',
        linkGitHub: "https://github.com/Deividb2/fitness_gym",
        linkProjeto: "",
        imgSrc: FitnessGym,
    },
    {
        nome: 'Loja Dani',
        linkGitHub: "https://github.com/Deividb2/loja_dani",
        linkProjeto: "",
        imgSrc: LojaDani,
    },
    {
        nome: 'Cafeteria',
        linkGitHub: "https://github.com/Deividb2/cafeteria",
        linkProjeto: "https://cafeteria-murex.vercel.app/",
        imgSrc: Cafeteria,
    },
    {
        nome: 'Carpintaria',
        linkGitHub: "https://github.com/Deividb2/carpintaria",
        linkProjeto: "",
        imgSrc: Carpintaria,
    },
    {
        nome: 'Carros Vintage',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: CarrosVintage,
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
    {
        nome: 'Exemplo',
        linkGitHub: "",
        linkProjeto: "",
        imgSrc: "",
    },
];
