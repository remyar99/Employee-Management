function EmployeeList({ employees }) {

    return (

        <div>

            <h2>Employees</h2>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.email}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default EmployeeList;