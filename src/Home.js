import ItemList from "./ItemList";
import useFetch from "./useFetch";
import {useState} from "react"

const Home = () => {
  const { data:items} = useFetch('http://localhost:8001/items')
  const { data:items2 } = useFetch('http://localhost:8001/items2')
  const [search, setsearch] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const handleSubmit=()=>{  
    if(search===""){
      setList1(items)
      setList2(items2)
    }
    else{
    const filtered=items.filter(i=>i.itemName.startsWith(search))
    const filtered2=items2.filter(i=>i.itemName.startsWith(search))
      setList1(filtered)
      setList2(filtered2)
    }
  }

  const handleSwap=()=>{
    var item1 = list1[Math.floor(Math.random()*list1.length)];
    var item2 = list2[Math.floor(Math.random()*list2.length)];
    var temp1=list1.filter(i=>i!==item1)
    var temp2=list2.filter(i=>i!==item2)
    setList1([...temp1,item2])
    setList2([...temp2,item1])
    
  }

  return (
    <div className="home">
       <button className="but" onClick={handleSwap}>swap</button>
       <button className="but"  onClick={handleSubmit}>View</button>
      <div className="Search"> 
        <input type="text" placeholder="search"  onChange={(e)=>setsearch(e.target.value)}/>
       <button onClick={handleSubmit}>Search</button>
 
       </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      { items && <ItemList items={list1} /> }
      { items2 && <ItemList items={list2} /> }
      </div>
    </div>
  );
}
 
export default Home;