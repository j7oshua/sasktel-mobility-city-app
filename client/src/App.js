import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Error } from "./pages"
import { MonthlyBills, Upload, SharedLayout, PhoneMapping, Departments, ViewBill } from "./pages/dashboard"

function App() {
    // ** How to connect to server
  // const fetchData = async () => {
  //     const showData = await axios.get("/api/v1/monthly_bills/bills")
  //     console.log(showData.data.result1.recordset)
  // }

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<MonthlyBills />} />
                <Route path="departments" element={<Departments />} />
                <Route path="phonemapping" element={<PhoneMapping />} />
                <Route path="view-bill" element={<ViewBill />} />
                <Route path="upload" element={<Upload />} />
            </Route>
            <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
