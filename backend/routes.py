from flask import jsonify, request
from models import db, Employee

def register_routes(app):

    @app.route("/")
    def home():
        return jsonify({
            "message": "Employee Management API is running!"
        })

    @app.route("/health")
    def health():
        return jsonify({
            "status": "UP"
        })

    # Get all employees
    @app.route("/employees", methods=["GET"])
    def get_employees():
        employees = Employee.query.all()
        return jsonify([employee.to_dict() for employee in employees])

    # Get employee by ID
    @app.route("/employees/<int:id>", methods=["GET"])
    def get_employee(id):
        employee = Employee.query.get_or_404(id)
        return jsonify(employee.to_dict())

    # Create employee
    @app.route("/employees", methods=["POST"])
    def add_employee():
        data = request.get_json()

        employee = Employee(
            name=data["name"],
            department=data["department"],
            salary=data["salary"],
            email=data["email"]
        )

        db.session.add(employee)
        db.session.commit()

        return jsonify(employee.to_dict()), 201

    # Update employee
    @app.route("/employees/<int:id>", methods=["PUT"])
    def update_employee(id):
        employee = Employee.query.get_or_404(id)

        data = request.get_json()

        employee.name = data["name"]
        employee.department = data["department"]
        employee.salary = data["salary"]
        employee.email = data["email"]

        db.session.commit()

        return jsonify(employee.to_dict())

    # Delete employee
    @app.route("/employees/<int:id>", methods=["DELETE"])
    def delete_employee(id):
        employee = Employee.query.get_or_404(id)

        db.session.delete(employee)
        db.session.commit()

        return jsonify({
            "message": "Employee deleted successfully"
        })