import { useState } from "react";
import Item from "./Item";
export default function ParkingList({
  items,
  onDeleteItem,
  onToggleItems,
  onclearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let SortedItems;
  if (sortBy === "input") SortedItems = items;
  if (sortBy === "description")
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));
  if (sortBy === "packed")
    SortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {SortedItems.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onclearList}>Clear list</button>
      </div>
    </div>
  );
}
