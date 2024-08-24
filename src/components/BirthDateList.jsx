import React from 'react'

const BirthDateList = ({peoples}) => {
    
  return (
    <div>{peoples.map((person)=>{
        const {id,name,age,image} = person
        return(
        <div><p>{id}</p>
            <p>{name}</p>
            <p>{age}</p>
            <img src ={image}></img>
            </div>
            
        )

    })}</div>
  )
}

export default BirthDateList