
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
 

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item-preview" key={item.id} style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
          <Link to={`/items/${item.id}`}>
            <h2>{ item.itemName }</h2>
            </Link>
        </div>
      ))}
      
    </div>
  );
}
 
export default ItemList;