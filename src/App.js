import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addJwt, removeToken } from './redux/reducer'; 
import AuthPage from './Auth/Auth';
function App() {
  const jwt = useSelector((state) => state.jwt)
  console.log(jwt)
const dispatch = useDispatch()
  return (
    <div className="App"> 
      {jwt?<h1>Dashboard

        <button onClick={()=>{
          dispatch(addJwt(""))
        }}>Login</button>
      </h1>:<AuthPage/>}
    </div>
  );
}


export default App;
