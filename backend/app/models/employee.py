from typing import Optional
from datetime import date

from sqlmodel import SQLModel, Field


class Employee(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    employee_id: str = Field(index=True)
    pycome_id: Optional[str]
    department_id: Optional[str]
    location_id: Optional[str]
    customer_id: Optional[str]
    hire_date: date = Field(sa_column_kwargs={"type_": "DATE"})
    rehire_date: date = Field(sa_column_kwargs={"type_": "DATE"})
    termination_date: date = Field(sa_column_kwargs={"type_": "DATE"})
    cost_rate: Optional[float]
