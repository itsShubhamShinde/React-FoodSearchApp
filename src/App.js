import './App.css';
import {useEffect , useState} from 'react';
import Search from './Components/Search';
import Cart from './Components/Cart';


function App() {
  
  const [inputvalue, setInputvalue] = useState("pizza")
  const [recipes, setRecipes] = useState([])
  
  
  useEffect(() => {
    console.log("app",inputvalue);
  const data= async()=>{
    const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputvalue}&app_id=833b46e1&app_key=6db57b943513a846a3143090d7efabab`)
    // console.log(response)
    const data= await response.json()
    console.log(data);
  
   setRecipes(data.hits)
  }
  data();
  
  }, [inputvalue])

  return (
    <div className="App">
    <Search inputvalue={inputvalue} setInputvalue={setInputvalue}/>
    <Cart  recipes={recipes} />
    </div>
  );
}

export default App;
