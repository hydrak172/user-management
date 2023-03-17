import {useRef, useState } from "react";

const App= ()=> {
  const [user,setUser]= useState({name:'K',email:'K@gmail.com'})
  const [arr,setArr]= useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  const [count,setCount]= useState(0)
  const [Users,setUsers]= useState([{name:'K',email:'K@gmail.com'},
                                    {name:'H',email:'H@gmail.com'},
                                    {name:'A',email:'A@gmail.com'}])
  const onClick=()=>{
    setCount(count+1)

    const newUser={
      ...user,
      email:`${user.name}${count+1}@gmail.com`
    }
    setUser(newUser)
  }
  
  const onClick2=()=>{
    const newArr=arr.map((item)=>{
      return item*2
  })
  setArr(newArr) 
}
  const onClick3=()=>{
    const newArr=arr.filter((item)=>{
      return item%3===0 
      // return undefined
  })
  setArr(newArr) 
  } 
  const onClick4=()=>{
    const newUsers=Users.map((item)=>{
      if(item.name==='K'){
        return {name : 'KHA',email:'KHA@gmail.com'}
      }
      return item
  })
  setUsers(newUsers) 
  } 
  const onClick5=()=>{
      setUsers([
        ...Users,
        {name : 'KHA',email:'KHA@gmail.com'}
      ])
  }
  return (
    <div>
      {arr.map((item)=>{
        return (
          <div>{item}</div>
        )
      })} 
      {
      Users.map((item)=>{
        return (
          <div>
            <div>Ten la : {item.name}</div>
            <div>Email la :{item.email}</div>
          </div>
        )
      })
      } 
      <div> Count la: {count} </div>
      <button onClick={onClick}>Click me</button>
      <button onClick={onClick2}>Click x2</button>
      <button onClick={onClick3}>Click %3</button>
      <button onClick={onClick4}>Click Charge</button>
      <button onClick={onClick5}>Click Add</button>
    </div> 

  );
}

export default App;


// Cach viet react 
//

// useRef
// react route 
// redux 
// layout cua du an route va redux
