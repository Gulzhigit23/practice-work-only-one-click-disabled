

import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ListTitle from "./components/ListTitle";

const data = [
  {
    id: "el1",
    title: "NextJS",
    checked: false,
  },
  {
    id: "el2",
    title: "ReactJs",
    checked: false,
  },
  {
    id: "el3",
    title: "JS",
    checked: false,
  },
];



function App() {
const [items,setItems] = useState(data)
const [ItemsValue,setItemValue] = useState([])

const addItemsHandler = (item) => {
  const uppDate = [] 
  items.map((el) => {
   return el.id === item.id ? uppDate.push({...el, checked:true}) : uppDate.push(el)
  })
  setItems(uppDate)
  const newItemsValue = [...ItemsValue, item]
  setItemValue(newItemsValue)
  
}

  return (
    <div className="App">
   {items.map((item) => {
    return(
      <Card 
     
      text={item.title}
        checked={item.checked}
        key={item.id}
        onClick={() => addItemsHandler(item)}
        
      />
    )
   })}
   <ListTitle getItems={ItemsValue}/>
  
    </div>
  );
}

export default App


