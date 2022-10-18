export default function getUserIpDetails(userResponse)
 {
  const {userName,userIp = '0.0.0.0'} = userResponse;
  const arr = new Array(2)
  arr[0] = userName
  arr[1] = userIp
  console.log(arr)
  return 'User Name = '   + arr[0] + ',' + ' UserIp = ' + arr[1] + '\n';
 } 

 export  function getTopThree(studentMarks)
  {
    //const first = 'First Student : ' + first
    const [first = null,second = null,third = null,rest] = studentMarks
    console.log(first,second,third)
    const arr = new Array(3)
    arr[0] = first
    arr[1] = second
    arr[2] = third
    console.log(rest)
    return 'First Mark = ' + arr[0] + '\n' + ' Second Mark = ' + arr[1] + '\n'+' Third Mark = ' + arr[2] + '\n'
  }

  /*

  import logo from './logo.svg';
import './App.css';
import getUserIpDetails from './functions/destructuring';
import { getTopThree } from './functions/destructuring';
function App() {
  const userResponse = {

    userName : 'test',
    }

    const studentMarks = [89 ,84 ,100 ,70,82]
  return (
    <div className="App">
      <div>

      {getUserIpDetails(userResponse)}

      </div>
      
      <div>

      {  getTopThree(studentMarks)}

      </div>
      
       
    </div>
  );
}

export default App;
*/