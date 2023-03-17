import React from 'react';
import { useState } from 'react';

const Index = () => {
    const [numbers, setNumbers] = useState([1, 1, 4, 6, 8, 3, 5, 5, 9, 17, 15])
    // lọc ra những số chẵn
    const onClick = () => {
        const newNumbers=numbers.filter((item)=>{
            return item%2===0 
        })
        setNumbers(newNumbers) 
    }
    // lọc ra những số chia hết cho 3
    const onClick2=()=>{
        const newNumbers=numbers.filter((item)=>{
          return item%3===0 
      })
      setNumbers(newNumbers) 
      } 
    // lọc   ra những số duy nhất
    const onClick3=()=>{
        const data={}
        numbers.forEach((item)=>{
          data[item]=true  //data di tung phan tu cua mang 
      })
      const newNumbers=Object.keys(data)
      setNumbers(newNumbers) 
      }  
    return (
        <div>
            {numbers.map((item) => {

                return (
                    <div>{item}</div>
                )
            })}

            <button onClick={onClick}>Click me</button>
            <button onClick={onClick2}>Click me</button>
            <button onClick={onClick3}>Click me</button>
        </div>
    );
  };
  
export default Index;