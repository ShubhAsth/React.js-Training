import React, { useState } from 'react';

function ItemCard({ item, onRemove }) {
  return (
    <div className="item-card">
      <h3>{item.itemName}</h3>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

function Form() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !price || !description) {
      alert('Please fill all fields!');
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substring(2, 15),
      itemName,
      price,
      description,
    };

    setItems([...items, newItem]);

    setItemName('');
    setPrice(0);
    setDescription('');
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>Item Management</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onRemove={handleRemoveItem} />
        ))}
      </div>
    </div>
  );
}

export default Form;
