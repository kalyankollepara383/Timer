import react,{useState} from 'react';


function App() {
 const[minutes,setMinutes]=useState('00')
 const [seconds,setSeconds]=useState('00')


const starttimer=()=>{
  
}












  return (
    <>
      <input type="number" value={minutes} onChange={(e)=>{setMinutes(e.target.value)}}/>&nbsp;
      <input type="number"  value={seconds} onChange={(e)=>{setSeconds(e.target.value)}}/> &nbsp;
      <button onClick={starttimer}>Start</button> &nbsp;
      <button>Resume</button>&nbsp;
      <button>Reset</button> &nbsp;

      <div>{minutes}:{seconds}</div>
     
    </>
  );
}

export default App;
