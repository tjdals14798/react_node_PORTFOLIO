import Header from './components/Header';
import Content from './pages/Content';
import Join from './pages/Join';
import Login from './pages/Login';
import Main from './pages/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState()
  const [sInfo, setSInfo] = useState()
  useEffect(() => {
    setSInfo(JSON.parse(sessionStorage.getItem('info')))
  },[user])
  return (
    <div className="App bg-light bg-gradient">
      <Header sInfo={sInfo}/>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/login' element={<Login setUser={setUser}/>}></Route>
        <Route path='/content' element={<Content />}></Route>
      </Routes>

    </div>
  );
}

export default App;
