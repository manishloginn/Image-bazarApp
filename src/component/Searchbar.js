import { useState } from "react";
import "../style/search.scss"

const Searchbar = ({setquery}) => {

    const [value, setvalue] = useState('')

    const search = () => {
        setquery(value)
    }

    return (
           <header className="searchcontainer"> 
           <input placeholder="Search image ................" 
           value={value} 
           onChange={(e)=> setvalue(e.target.value)} />

           <button onClick={search}>Search</button>
           
           </header>
    )
}

export default Searchbar;   