import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { getEmployees } from "./services/api";

function App() {

    const [employees, setEmployees] = useState([]);

    const loadEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div className="App">

            <h1>Employee Management System</h1>

            <EmployeeForm onEmployeeAdded={loadEmployees} />

            <hr />

            <EmployeeList employees={employees} />

        </div>
    );
}

export default App;