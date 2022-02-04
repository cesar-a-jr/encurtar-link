import { useState, useEffect } from 'react'; 
import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import { Link } from 'react-router-dom'

import {getLinksSave, deleteLink} from '../../services/storeLinks';
import LinkItem from '../../components/LinkItem';

export default function Links(){
  const [myLinks, setMylinks] = useState([]);
  
  const [data, setData] = useState({});

  const [showModal, setShowModal] = useState(false);

  const [emptyLinst, setEmptyLinst] = useState(false);


  useEffect(() =>{
    async function getLinks(){
      const result = await getLinksSave('@Link')
      
      if (result.length === 0) {
        setEmptyLinst(true);
      }

      setMylinks(result);

    }
    
    getLinks()
  }, [])

  function handleOpenLink(link) {
  setData(link)
  setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptyLinst(true);
    }

    setMylinks(result);

  }



    return (
      <div className="links-container">
        <div className="links-header">
          <Link to="/">
          <FiArrowLeft size={38} color="white"/>
          </Link>
          <h1>Meus Links</h1>
        </div>

        {emptyLinst && (
          <div className="links-items">
            <div className="empty-text">Sua Lista está vazia...</div>
          </div>
        )}

        {myLinks.map(link=>(
          <div key={link.id} className="links-item">
          <button className="link" onClick={()=>handleOpenLink(link)} >
            <FiLink size={18} color="white"/>
            {link.long_url}
          </button>
          <button className="link-delete" onClick={()=> handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454"/>
          </button>
        </div>
        ))}

        {showModal && (
          <LinkItem
            closeModal={()=>setShowModal(false)}
            content={data}
          />
        )}
      </div>
    )
  }