import "./App.css";
import BillsBar from "./components/Bills/BillsBar";
import BillsTable from "./components/Bills/BillsTable";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BillsBar />

      <BillsTable />
    </div>
  );
}

export default App;
