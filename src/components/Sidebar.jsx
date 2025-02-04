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

import React, { useState } from "react";

export default function Sidebar() {
  // State for the new menu item input
  let [newMenuItem, setNewMenuItem] = useState("");
  
  // State for the menu items array
  let [menuItems, setMenuItems] = useState([]);

  // State for the filter input
  let [filter, setFilter] = useState("");

  // Function to add a new menu item to the list
  const addMenuItem = () => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([newMenuItem, ...menuItems]); // Adds the new item to the list
      setNewMenuItem(""); // Clear the input after adding the item
    }
  };

  return (
    <div>
      {/* Input for the new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      
      {/* Button to add the new menu item */}
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      
      {/* Input for the filter */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      {/* Render the filtered list of menu items */}
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
