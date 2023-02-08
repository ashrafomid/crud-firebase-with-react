import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate(`/search?q=${term}`)
    }
  return (
    <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search: "></label>
            <input type="text"
            id='search'
            onChange={(e)=>setTerm(e.target.value)}
            required
            />
        </form>
    </div>
  )
}
