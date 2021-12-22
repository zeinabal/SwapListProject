import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {Modal,Button, Item} from "semantic-ui-react"
import { useState } from 'react';

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('http://localhost:8001/items/' + id);
  const { data: item2} = useFetch('http://localhost:8001/items2/' + id);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [itemColor, setItemcolor] = useState('');
  const [about, setAbout] = useState('');
  
const handleSubmit=()=>{
 
  const newItems={age:age,itemName:itemName,phone:phone,itemColor:itemColor,about:about}
if(item !==null){fetch('http://localhost:8001/items/'+item.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItems)
    }).then(response => {response.json();window.location.reload()})

}
else if(item2 !==null)
{
  fetch('http://localhost:8001/items2/'+item2.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItems)
    }).then(response => {response.json();window.location.reload()})
}
}
  
  const handleClick = () => {
    if(item !==null){fetch('http://localhost:8001/items/' + item.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })}
    else if(item2!==null){
       fetch('http://localhost:8001/items2/' + item2.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
    }
     
  }
 
  const openModal = () => {
    setOpen(true);
if(item!==null){ 
    setAge(item.age);
    setPhone(item.phone);
    setItemName(item.itemName);
    setAbout(item.about);
    setItemcolor(item.itemColor);
  }

   else if(item2!==null){
    setAge(item2.age);
    setPhone(item2.phone);
    setItemName(item2.itemName);
    setAbout(item2.about);
    setItemcolor(item2.itemColor);
   } 
  }
  return (
    <div className="item-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { item && (
        <article>
          <h2>{ item.itemName }</h2>
          <p>Age: { item.age }</p>
          <p>Item Color: { item.itemColor }</p>
          <p>Phone: { item.phone }</p>  
          <div><p>About:</p>{ item.about}</div>        
        </article>
      )}
      { item2 && (
        <article> 
          <h2>{ item2.itemName }</h2>
          <p>Age: { item2.age }</p>
          <p>Item Color: { item2.itemColor }</p>
          <p>Phone: { item2.phone }</p>
          <div><p>About:</p>{ item2.about}</div>        
        </article>
      )}
      <button onClick={handleClick} >Delete</button>
       
      <Modal
      onClose={() => setOpen(false)}
      onOpen={openModal}
      open={open}
      trigger={<Button >Edit</Button>}>

      <Modal.Content>
        <Modal.Description >
        <div className="edit">
      <h2>Edit Item</h2>
      <form className="edit-des">  
        <label>Age:</label>
        <input 
          type="text" 
          required 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
         <label>Item Color:</label>
        <input 
          type="text" 
          required 
          value={itemColor}
          onChange={(e) => setItemcolor(e.target.value)}
        />
        <label>Item Name:</label>
        <input 
          type="text" 
          required 
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
         <label>Phone:</label>
        <input 
          type="text" 
          required 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>About:</label>
        <textarea
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </form>
    </div>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions >
        <Button className="edit-button"color='black' onClick={() => setOpen(false)}>
          cancel
        </Button>
        <Button
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={ handleSubmit}
          positive
          className="edit-button"
        />
      </Modal.Actions>
    </Modal>
    
    </div>
  );
}
 
export default ItemDetails;