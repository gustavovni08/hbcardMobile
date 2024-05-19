import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider ({children}) {

    const [associado, setAssociado] = useState(null)
    const [servico, setServico] = useState(null)
    const [credenciado, setCredenciado] = useState(null)
    const [agendamento, setAgendamento] = useState(null)

    return(
        <GlobalContext.Provider
        value={{
            associado,
            setAssociado,
            servico,
            setServico,
            credenciado,
            setCredenciado,
            agendamento,
            setAgendamento
        }}
        >

        {children}

        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider

