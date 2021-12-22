import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [itemName, setItemName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [itemColor, setItemcolor] = useState('');
  const [about, setAbout] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {age ,itemColor,itemName,phone, about };

    fetch('http://localhost:8001/items', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => {
      history.push('/');
           alert('Added to List1');
    })
  }
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const item1 = {age ,itemColor,itemName,phone, about };

    fetch('http://localhost:8001/items2', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item1)
    }).then(() => {
      history.push('/');
     
      alert('Added to List2');
    })
  }

  return (
    <div className="create">
      <h2>Add Item</h2>
      
      <form >
         
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
        <button onClick={handleSubmit}>Add List1</button>
        <button onClick={handleSubmit1}>Add List2</button>
      </form>
    </div>
  );
}
 
export default Create;