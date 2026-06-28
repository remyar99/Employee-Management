const API_URL = "http://13.60.9.174:5000";

export async function getEmployees() {

    const response = await fetch(`${API_URL}/employees`);

    return response.json();

}

export async function addEmployee(employee) {

    const response = await fetch(`${API_URL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    return response.json();

}
