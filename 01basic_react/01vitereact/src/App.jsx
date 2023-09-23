import Chai from "./Chai";

const Number = ({numbers}) => {
  const list = numbers.map((number) => <li>{number}</li>)
  return list;
}

function App() {

  //{} these are used to to insert javscript variable in the HTML 
  //But these are only used to insert the final value of any script
  //you cannot do evaluation in {} them.
  

  let Anotherusername = "rushikesh";
  const numbers = [1,4,2,3,4,5]

  const skills = [
    ["HTML", 10],
    ["CSS",10],
    ["Javascript", 5],
    ["React", 0]
  ]

  const Subcomponent = ({skill : [tech, exp]}) => (
    <li>{tech} {exp}</li>
  )

  const Skills =  ({skills}) => {
    const skillList = skills.map((data) => <Subcomponent skill = {data}/>)
    return <ul>{skillList}</ul>
  }

  const countries = [
    {name: "India", city: "Mumabai"},
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' }
  ]

  //country and city component
  const CountryInfo = ({countries: {name, city}}) => {
    return (
      <div>
        <h1>{name}</h1>
        <h2>{city}</h2>
      </div>
    )
  }

  const ListOFCounties = ({countries}) => {
    const countryList =  countries.map((data) => <CountryInfo countries= {data}/>)
    return <ul>{countryList}</ul>
  }
  

  return (
    <>
    <Chai />
    <h1>Chai or react with vite && {Anotherusername} </h1>

    {/* Mapping of Array and rendering it on the page */}

    {/* <div className="container">
      <h1>Array : </h1>
      {[1,2,2,3,4,5]}
    </div> */}

    {/* Mapping Array of number  */}

    

    {/* <div className="container">
      <div>
      <h1>Mapping of numbers</h1>
      <ul>
        <Number numbers = {numbers}/>
      </ul>
      </div>

    </div> */}

    {/* Mapping Array of Array */}

    {/* <div className="container">
      <h1>Array returning array</h1>

        <Skills skills = {skills}/>
      
    </div> */}

    {/* Mapping Array of Numbers */}

    <div className="container">
      <h1>List of Countries and citis</h1>
      <ListOFCounties countries={countries}/>
    </div>
    </>
  )
}

export default App
