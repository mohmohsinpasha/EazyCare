import './App.css'
import { useEffect, useState } from 'react';
import Profile from './components/user/Profile'


import Signin from './components/user/Signin';
import UserInfo from './components/user/UserInfo';


function App() {
  const [edit, setEdit] = useState(false)
  
  const [data, setData] = useState([])
  let handleEdit = ()=>{
    setEdit(!edit)
  }
  let onSave = (formdata) =>{
    setData(formdata);
    console.log(data)
  }
  useEffect(()=>{
    console.log("page state changed",data)
  },[data])
  return (
    <div>
      <Profile data={data} handleEdit={handleEdit}/> 
      {edit && <UserInfo onSave={onSave}  onClose={handleEdit}/>}

    </div>
  )


}

export default App;
