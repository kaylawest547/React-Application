// First Task
import { useState, useCallback } from "react"
const Sidebar = ({ initialMenuItems }) => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  return (
    <aside className="sidebar">
      {/* TODO: Implement menu rendering */}
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React, { useState, useCallback } from "react";

export default function Sidebar() {
  // New menu item
  let [newMenuItem, setNewMenuItem] = useState("");
  
  // List of menu items
  let [menuItems, setMenuItems] = useState([]); // This stores the current menu items

  // Filter text
  let [filter, setFilter] = useState("");

  // Function to add a new menu item to the state
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      // Adds the new menu item to the existing list
      setMenuItems((prevMenuItems) => [newMenuItem, ...prevMenuItems]);
      setNewMenuItem(""); // Clear the input after adding
      console.log("Added menu item:", newMenuItem);
    }
  }, [newMenuItem]); 

  return (
    <div>
      <input
        type="text"
        value={newMenuItem}
        onChange={(e) => setNewMenuItem(e.target.value)}
        placeholder="Add a new menu item"
      />
      <button onClick={addMenuItem}>Add Menu Item</button>

      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter menu items"
        />
      </div>

      <ul>
        {menuItems
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          /* TODO: 3 */
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
