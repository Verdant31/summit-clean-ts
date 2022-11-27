import { Repo } from "../contexts/RepositoriosContext";
import Repositorio from "./Repositorio";

interface ListaRepositoriosProps {
    repositorios: Repo[];
}
export default function ListaRepositorios({repositorios}: ListaRepositoriosProps) {
    return (
        <div>
            {repositorios.map((repositorio) => {
                return (
                    <Repositorio 
                        key={repositorio.name} 
                        repositorio={repositorio}
                    />
                )
            })}
        </div>
    )
}