from sageintacctsdk import SageIntacctSDK
from sageintacctsdk.exceptions import SageIntacctSDKError

from app.core.config import settings

connection = SageIntacctSDK(
    sender_id=settings.sageintacct_sender_id,
    sender_password=settings.sageintacct_sender_password,
    user_id=settings.sageintacct_user_id,
    user_password=settings.sageintacct_user_password,
    company_id=settings.sageintacct_company_id,
    # entity_id=settings.sageintacct_entity_id,  # Optional
)


class SageIntacctService:
    def __init__(self):
        self.client = SageIntacctSDK(
            sender_id=settings.sageintacct_sender_id,
            sender_password=settings.sageintacct_sender_password,
            user_id=settings.sageintacct_user_id,
            user_password=settings.sageintacct_user_password,
            company_id=settings.sageintacct_company_id,
            # entity_id=settings.sageintacct_entity_id,  # Optional
        )

    def get_employees(self):
        try:
            response = self.client.function(
                "readByQuery",
                {
                    "object": "EMPLOYEE",
                    "fields": "*",
                    "query": "ACTIVE = 'true'",
                    "pagesize": "1000",
                },
            )
            return response
        except SageIntacctSDKError as e:
            raise Exception(f"Error fetching employees: {e}")

    def update_employee(self, employee_data):
        try:
            response = self.client.function("update", {"object": "EMPLOYEE", **employee_data})
            return response
        except SageIntacctSDKError as e:
            raise Exception(f"Error updating employee: {e}")

    def create_employee(self, employee_data):
        try:
            response = self.client.function("create", {"object": "EMPLOYEE", **employee_data})
            return response
        except SageIntacctSDKError as e:
            raise Exception(f"Error creating employee: {e}")
