import Chai from "./Chai";

function App() {

  let Anotherusername = "rushikesh";

  //{} these are used to to insert javscript variable in the HTML 
  //But these are only used to insert the final value of any script
  //you cannot do evaluation in {} them.
  

  return (
    <>
    <Chai />
    <h1>Chai or react with vite && {Anotherusername} </h1>
    </>
  )
}

export default App
