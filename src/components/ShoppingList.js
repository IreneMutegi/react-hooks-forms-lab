import React from "react";
import Item from "./Item";

function ShoppingList({ items, searchTerm = "", category }) {
  const filteredItems = items.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearchTerm =
      typeof item.name === "string" &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <ul className="Items">
      {filteredItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  );
}

export default ShoppingList;
