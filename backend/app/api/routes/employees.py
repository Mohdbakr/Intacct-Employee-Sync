from fastapi import APIRouter

from app.services.sageintacct import connection

router = APIRouter()

employee_fields = [
    "Employeeid",
    "Title",
    "Locationid",
    "Departmentid",
    "Startdate",
    "Rehire_date",
    "Enddate",
    "Status",
    "Employeetype",
    "Emptypekey",
    "Gender",
    "PERSONALINFO.CONTACTNAME",
    "Entity",
    "Paycom_ID",
    "Customer_ID",
]


@router.get("/get_employee/{employee_id}")
async def get_employee(employee_id: str):
    employee = connection.employees.get(field="EMPLOYEEID", value=employee_id)
    return employee


@router.get("/get_all_employees")
async def get_all_employee():
    employees = connection.employees.get_all(fields=employee_fields)
    return employees
