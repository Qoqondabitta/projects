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



// localStorage.setItem("aim", "perfectness")
// localStorage.setItem("aim", JSON.stringify({}))
// const Localstorage = () => {
//   // const [aim, setAim] = useState(localStorage.getItem("aim"))
//   // const Plus = ()=>{
//   //   localStorage.setItem("digit")
//   // }
//   // const createUser = (name)=>{
//   //   return {id: Date.now().toString().splice(0, 3), name}
//   // }
// return (
//   <div>
//       {/* <h1>Localstorage</h1> */}
//       {/* <h2>{localStorage.getItem("digit")}</h2> */}
//       {/* <h2>{JSON.parse(localStorage.getItem("aim")).name}</h2> */}
//       {/* <input type="text" onChange={ ({target:{value}}) => {
//           // setAim(value);
//           // let res =createUser(value)
//           // localStorage.setItem('aim', JSON.stringify(res))
//           // localStorage.setItem('aim', value)
//       } } /> */}
//       {/* <h2>{digit}</h2> */}
//       {/* <button onClick={()=>{localStorage.removeItem(JSON.parse(localStorage.getItem("aim")));setAim('')}}>Delete</button> */}
//   </div>
// )
// }