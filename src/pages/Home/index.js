import { useState } from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLinks } from '../../services/storeLinks'

export default function Home(){
    const[link, setLink] =useState('');
    const[showModal, SetShowModal] = useState(false);
    const[data, SetData] = useState({});

    async function newLink(){
      try{
        const response = await api.post('/shorten', {
          long_url:link
        })
        SetData(response.data);
        SetShowModal(true);

        saveLinks('@Link', response.data);


        setLink('')
      }catch{
        alert('Ops, Parece que algo deu errado!')
        setLink('')
      }

    }

    return (
      <div className="container-home">

        <div className="logo">
            <img src="logo.png" alt="Sujeito Link Logo"/>
            <h1>Encurtador de Link</h1>
            <span>Cole seu link para encurtar 👇</span>
        </div>
        <div className="area-input">
            <div>
                <FiLink size={24} color="white"/>
                <input
                    placeholder="Cole seu link aqui!"
                    value={link}
                    onChange={(e)=>setLink(e.target.value)}
                />
            </div>

            <button onClick={newLink}>Encurtar link</button>
        </div>

        <Menu/>
        {showModal && (
        <LinkItem
          closeModal={() =>SetShowModal(false)}
          content={data}
        />
        )}

      </div>
    )
  }