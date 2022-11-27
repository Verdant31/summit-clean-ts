import { createContext, ReactNode, useContext, useEffect, useState } from "react";
export type Repo = {
    name: string;
    id: string;
    svn_url: string;
}
type RepositoriosContextData = {
    repos: Repo[];
}
type RepositoriosContextProps = {
    children: ReactNode;
}
export const RepositoriosContext = createContext({} as RepositoriosContextData);

export function RepositoriosContextProvider({children}: RepositoriosContextProps) {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/verdant31/repos")
          .then(res => res.json())
          .then(data => setRepos(data))
    }, [])

    return (
        <RepositoriosContext.Provider value={{repos}}>
            {children}
        </RepositoriosContext.Provider>
    )
}

export function useRepositorios() {
    const value = useContext(RepositoriosContext);
    return value;
}