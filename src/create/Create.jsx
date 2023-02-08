import { useRef, useState } from 'react'
import './Create.css'

import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients ] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()



  const handleSubmit = (e)=>{
    e.preventDefault()
    
    const document = {
      title, ingredients, method, cookingTime: cookingTime+' minutes', timeStamp: serverTimestamp()
    }
    addDoc(collection(db, "recipes"),document).then(()=>{
      navigate('/')
    }).catch((error)=>{
      navigate('/')
      console.log('Something went wrong sorry')
    })
  }
  const handleAdd= (e)=>{
    e.preventDefault();
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIng=> [...prevIng, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }
  
  return (
    <div className='create'>
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input type="text"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required 
          />
        </label>
        <label >
          <span>Ingredients</span>
          <div className="ingredients">
            <input type="text"
            onChange={(e)=> setNewIngredient(e.target.value)}
            value={newIngredient}
            ref= {ingredientInput}
            />
            <button className='btn' onClick={handleAdd}
            
            >add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients && ingredients.map(ing=> (<em key={ing}>{ing}, </em>))}</p>
        <label >
          <span>Recipe Method:</span>
          <textarea 
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          />
        </label>
        <label>
          <span>It Takes in Minute:</span>
          <input type="number"
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          required
          />
        </label>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
