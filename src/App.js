import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
   
   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = '';
const PASSWORD = '';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => { 
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }))
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch = {onSearch}/>}
         <Routes>
            <Route path = {'/'} element = {<Form login={login}/>}/>
            <Route path = {'/About'} element = {<About/>}/>
            <Route path = {'/Home'} element = {<Cards characters={characters} onClose = {onClose}/>}/>   
            <Route path = '/Detail/:id' element = {<Detail/>}/>   
            <Route path = {'/Favorites'} element = {<Favorites/>}/>  
         </Routes>
         
         
      
      </div>
   );
}

export default App;
