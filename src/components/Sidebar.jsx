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

export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [])

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
