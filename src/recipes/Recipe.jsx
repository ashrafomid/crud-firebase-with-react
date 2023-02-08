import React, { useEffect, useState } from 'react'
import './Recipe.css'

import { useParams } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase/config'



export default function Recipe() {
  const {mode} = useTheme()
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const handleUpdate = ()=>{
    const update = doc(db, "recipes", id)
    updateDoc(update,{
      cookingTime: '1 Hours'
    }).then(()=>{
      console.log('Updated Successfully')
    }).catch((err)=>{
      setError(err.message)
    })
  }
  useEffect(()=>{
    setIsPending(true)
    const docRef = doc(db, "recipes", id);
    
    try {
      getDoc(docRef).then(doc=>{
        
        setRecipe(doc.data())
        setIsPending(false)
      })
  } catch(error) {
      setError(error.message)
      setIsPending(false)
  }
  },[id])
  return (
    <div className={`recipe ${mode}`}>
      {error && <p>{error}</p>}
      {isPending &&  <p>Loading...</p>}
      {recipe && (
      <div key={recipe.index}>
      <h2 className="page-title">
        {recipe.title}
      </h2>
      <p>Takes {recipe.cookingTime} to Make</p>
      <ul>
        {recipe.ingredients.map(ing=>(
          <li key={ing}>
            {ing}
          </li>

        ))}
      </ul>
      <p className='method'>{recipe.method}</p>
      <button onClick={()=> handleUpdate()}>Update ME</button>
      </div>
      )
      }

    </div>
  )
  
}
