import './App.css'

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const isPrime = (num) => {

  if(num <= 1) return false;
  if(num === 2) return true;

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return true;
}

const isOdd = (num) => {
  return num % 2;
}

const getBGcolor = (num) => {
  let color = "green";
  if(isPrime(num)) return color = "tomato"; //prime
  if(isOdd(num)) color = "yellow"; //odd
  else color = "lightgreen"; //even
  
  return color;
}




const Box = ({array}) => {

  const digit = array.map((num) => <div className=' p-4' style={{backgroundColor: getBGcolor(num)}} key= {num}>{num}</div>)

  return (
    <div className='grid grid-cols-7 gap-1 '>
      {digit}
    </div>
  )
}

function App() {

  return (
    <>
    <div className='flex flex-col gap-10'>
    <h1>20 numbers classification with colors</h1>
    <h1 className='tracking-wider'>Prime: Red  <br />    Odd: Yellow  <br />     Even:Green</h1>
    <div className='Container w-1/2 mx-auto'>
      <div>
        <Box array = {array}/>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
