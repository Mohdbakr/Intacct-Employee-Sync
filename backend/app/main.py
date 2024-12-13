from fastapi import FastAPI
from contextlib import asynccontextmanager

from app.database.init_db import init_db
from app.services.sageintacct import connection

app = FastAPI()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # perform startup tasks
    init_db()
    yield

    # perform cleanup tasks


@app.get("/get_employee/{employee_id}")
async def get_employee(employee_id: str):
    employee = connection.employees.get(field="EMPLOYEEID", value=employee_id)
    return employee


@app.get("/get_all_employees")
async def get_all_employee():
    employees = connection.departments.get_all()
    return employees


@app.get("/")
def read_root():
    """_summary_

    Returns:
        _type_: _description_
    """
    return {"message": "Welcome to the Employee Sync API"}
