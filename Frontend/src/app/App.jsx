import "../App.css";
import Login from "../features/auth/Login";
import { Sidebar } from "../features/admin-dashboard/Sidebar";
function App() {
  return (
    <div>
      <Login />
      <Sidebar />
    </div>
  );
}

export default App;
