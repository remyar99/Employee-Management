import { addEmployee } from "../services/api";
import { useState } from "react";

function EmployeeForm({ onEmployeeAdded }) {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");

    // 1. Define the handler function FIRST
    const handleSubmit = async () => {
        const employee = {
            name,
            department,
            salary,
            email,
        };

        const response = await addEmployee(employee);
        onEmployeeAdded();
        console.log(response);

        // Clear the form fields
        setName("");
        setDepartment("");
        setSalary("");
        setEmail("");

        alert("Employee Added Successfully!");
    };

    // 2. Return the JSX at the very END of the function
    return (
        <div>
            <h2>Add Employee</h2>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <button onClick={handleSubmit}>
                Add Employee
            </button>
        </div>
    );
} // Closing brace for EmployeeForm

// 3. Export belongs outside the function completely
export default EmployeeForm;