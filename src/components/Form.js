import { useState } from "react";

export default function Form({ OnAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;
    // Set to its default value when the button is clicked
    setDescription("");
    setQuantity(1);

    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);

    OnAddItems(newItems);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
