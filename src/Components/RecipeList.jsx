import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'
import deleteIcon from '../assets/deleteIcon.svg'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function RecipeList({recipe}) {
    const {mode} = useTheme()
    if(recipe.length ===0 ){
        return <div className='error'>No Recipes to Load...</div>
    }
    const handleClick = (id)=>{
        deleteDoc(doc(db,"recipes",id)).then(()=>{
            console.log('success! one item has deleted from your database')
        })
    }
  return (
    <div className='recipe-list'>
        {recipe.map(recipeli =>(
            <div className={`card  ${mode}`} key={recipeli.id}>
                <h3>{recipeli.title}</h3>
                <p>{recipeli.cookingTime} to make</p>
                <div>{recipeli.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipeli.id}`}>Cook This</Link>
                <img
                className='delete'
                onClick={()=> handleClick(recipeli.id)}
                src={deleteIcon} alt="delete Icon" />
            </div>
        ))}
    </div>
  )
}
