import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newCategory, setNewCategory] = useState("Produce")
  const [newItemName, setNewItemName] = useState("")
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newItemName,
    category: newCategory,
  }

  function handleNewCategory(e){
    setNewCategory(e.target.value)
  }

  function handleNewItemName(e){
    setNewItemName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit(newItem)
  }

  return (
    //we need the handlesubmit on the form itself for the e.preventdefault().
    //within the handleSubmit we need a function to call on ItemFormSubmit
    //ItemFormSubmit comes from the App Parent component
    //New item is passed to the parent
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewCategory}>
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
