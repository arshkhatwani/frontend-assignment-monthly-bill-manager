import "./App.css";
import BillsBar from "./components/Bills/BillsBar";
import BillsTable from "./components/Bills/BillsTable";
import EditBill from "./components/Bills/EditBill";
import NewBill from "./components/Bills/NewBill";
import Navbar from "./components/Navbar/Navbar";
import TimeSeriesChart from "./components/TimeSeriesChart/TimeSeriesChart";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BillsBar />

      <BillsTable />

      <TimeSeriesChart />

      <NewBill />

      <EditBill />
    </div>
  );
}

export default App;
