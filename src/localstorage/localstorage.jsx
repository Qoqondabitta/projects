import React, {useState} from 'react'


JSON.stringify(localStorage.setItem('aim', {}))
export const Localstorage = () => {
    const [aim, setAim] = useState(localStorage.getItem("aim"));
    const createuser = (name)=>{
      return { id : Date.now(), title : name };
    }
    return <div>
      <h1>localStorage</h1>
      <h2>{JSON.parse(localStorage.getItem("aim")).title}</h2>
      <input type="text" onChange={ ({target:{value}}) => {
        setAim(value);
        let res = createuser(value)
        localStorage.setItem( "aim", JSON.stringify(res));
        localStorage.setItem("aim", value)
        // localStorage.setItem('aim', value)
      } } />
      {/* <button onClick={ () => { localStorage.removeItem("aim"); setAim('') } }>remove</button> */}
      {/* <button onClick={ () => { localStorage.clear(); setAim('') } }>clear</button> */}
    </div>
}

export default Localstorage