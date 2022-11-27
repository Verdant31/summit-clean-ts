import { Repo } from "../contexts/RepositoriosContext";

interface RepositorioProps {
    repositorio: Repo;
}

export default function Repositorio({ repositorio } : RepositorioProps) {
    return (
        <ul>
            <li>{repositorio.name}</li>
            <a href={repositorio.svn_url} target="_blank" rel="noreferrer">
            Acessar repositório
            </a>
        </ul>
    )
}