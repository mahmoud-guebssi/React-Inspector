import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";

// Counter component with working increment
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// UserItem receives theme prop
class UserItem extends Component {
  render() {
    const { user, theme } = this.props;
    return (
      <div style={{ background: theme === "dark" ? "#333" : "#eee", padding: "8px", margin: "4px" }}>
        <span>
          {user.name ? `Hello, ${user.name}` : "No name provided"}
        </span>
      </div>
    );
  }
}

// UserList passes theme to UserItem
function UserList({ users, theme }) {
  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <UserItem key={user.id} user={user} theme={theme} />
      ))}
    </div>
  );
}

// ThemeToggle toggles theme correctly
function ThemeToggle({ theme, setTheme }) {
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleToggle}>
      Toggle Theme (currently {theme})
    </button>
  );
}

// Main App component
function App() {
  const [theme, setTheme] = useState("light");
  const [users] = useState([
    { id: 1, name: "Alice" },
    { id: 2 },
    { id: 3, name: "Charlie" }
  ]);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <UserList users={users} theme={theme} />
      <Counter />
    </div>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default Counter;
export { UserItem, UserList, ThemeToggle };