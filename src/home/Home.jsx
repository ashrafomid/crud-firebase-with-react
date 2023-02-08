import './Home.css'
import RecipeList from '../Components/RecipeList';
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const {documents: data} = useCollection('recipes');
  return (
    <div className='home'>
      {data && <RecipeList recipe = {data}/>}
    </div>
  )
}
