import React, {createContext ,useState} from 'react'

const Verbs = createContext()

export const ContextHome = ({children}) => {
    const [proverbs, setProverbs] = useState([
        {id: 1, name: "me"},
        {id: 2, name: "he"},
        {id: 3, name: "she"},
        {id: 4, name: "it"},
        {id: 5, name: "you"},
        {id: 6, name: "they"},
        {id: 7, name: "we"},
    ])
  return (
    <Verbs.Provider value={[proverbs, setProverbs]}>{children}</Verbs.Provider>
  )
}

export default ContextHome 