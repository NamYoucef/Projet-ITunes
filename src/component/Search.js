import '../style/search.css';
import itunes from '../assets/itunes.svg';
import cart  from '../assets/cart.png';
import { useState } from 'react';
import Cart from './Cart';
import useFetch from '../api/useFetch';

function Search(){
    
    const [artist,setArtist] = useState('');
    const {donnee} = useFetch('https://itunes.apple.com/search?');
    console.log(donnee);

    function handleSubmit(e){
        e.preventDefault();
        console.log(artist);
        console.log(donnee)
    }
    return(
        <div className="container">
            <img src={itunes} alt="itunes images" className='img-itunes'/>
            <div className='cart'>
                <Cart/>
            </div>
            <form  className="serachform" onSubmit={handleSubmit}>
                <div className='input-bloc'>
                    <input type="text" id="nom" className='input-itunes' name="artist" autoFocus required value={artist} placeholder='Rechercher facilemennt toutes vos musiques iTunes'
                    onChange={(e)=>setArtist(e.target.value)} />
                </div>
                <input className="button-rech" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}
export default Search;