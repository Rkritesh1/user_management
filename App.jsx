import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>User Management System</h1>
      <AddUser onUserAdded={() => setRefresh(!refresh)} />
      <UserList key={refresh} />
    </div>
  );
}

export default App;
