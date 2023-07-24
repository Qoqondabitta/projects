import React, {useState, useContext} from 'react'
import ContextHome from '../../contextHome'
export const Hcvtutorial = () => {
    const [proverbs, setProverbs] = useState(useContext)
    const onDelete = (id) => {
        let result = proverbs.filter( (item) => {
            return item.id !== id
        } );
        setProverbs({proverbs : result})
    }
  return (
    <div>
        <h2>{proverbs.length}</h2>
        {
            proverbs.map( (item) => {
                return <h1>{item.id}.{item.name} <button onClick={ () => onDelete(item.id) }>Delete</button></h1> 
            } )
        }
    </div>
  )
}

export default Hcvtutorial
