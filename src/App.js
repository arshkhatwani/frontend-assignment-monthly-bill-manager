import "./App.css";
import BillsBar from "./components/Bills/BillsBar";
import BillsTable from "./components/Bills/BillsTable";
import EditBill from "./components/Bills/EditBill";
import NewBill from "./components/Bills/NewBill";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BillsBar />

      <BillsTable />

      <NewBill />

      <EditBill />
    </div>
  );
}

export default App;
