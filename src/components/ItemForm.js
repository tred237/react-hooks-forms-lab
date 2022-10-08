import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formName, setName] = useState("")
  const [formCategory, setCategory] = useState("Produce")

  function handleFormNameChange(e){
    setName(e.target.value)
  }

  function handleFormCategoryChange(e){
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: e.target.name.value,
      category: e.target.category.value,
    };
    props.onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormNameChange} value={formName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormCategoryChange} value={formCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
