import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemName, setItemName] = useState("")
  const [itemArr, setItemArr] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemNameChange(e){
    setItemName(e.target.value)
  }

  function onItemFormSubmit(newElement){
    setItemArr([...itemArr, newElement])
  }

  const itemsToDisplay = itemArr.filter((item) => {
    if(itemName.length > 0){
      return item.name.includes(itemName)
    } else if (selectedCategory === "All") {
      return true
    } else {return item.category === selectedCategory;};
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={itemName} onCategoryChange={handleCategoryChange} onSearchChange={handleItemNameChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
