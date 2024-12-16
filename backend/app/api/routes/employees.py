from fastapi import APIRouter

from app.services.sageintacct import connection

router = APIRouter()


@router.get("/get_employee/{employee_id}")
async def get_employee(employee_id: str):
    employee = connection.employees.get(field="EMPLOYEEID", value=employee_id)
    return employee


@router.get("/get_all_employees")
async def get_all_employee():
    employees = connection.departments.get_all()
    return employees
