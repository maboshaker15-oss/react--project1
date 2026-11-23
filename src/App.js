import Cart from "./cart"
function App(){
  const person=[
    {id:1,firstName:'moaz',lastName:'shaker',color:'black'},
    {id:2,firstName:'mohamed',lastName:'shaker',color:'white'},
    {id:3,firstName:'mohamed',lastName:'nasser',color:'orange'},
    {id:4,firstName:'abdo',lastName:'shafey',color:'red'},
    {id:5,firstName:'ahmed',lastName:'gamal',color:'blue'},
  ];
    return(
     <Cart allData={person}/>
    )
}
export default App;