# NIDHI Backend API Contract

## 1. Start / Continue Chat
POST /chat/message

Body:
{
  "session_id": "string",
  "message": "string"
}

Response:
{
  "reply": "string",
  "stage": "CHAT | UNDERWRITE | VERIFY"
}

---

## 2. Upload Salary Slip (Complex Path Only)
POST /document/upload

Body:
{
  "session_id": "string",
  "slip_type": "happy | borderline | reject"
}

Response:
{
  "reply": "string",
  "status": "APPROVED | REJECTED"
}

---

## 3. Admin Dashboard
GET /admin/applications

Response:
[
  {
    "session_id": "string",
    "user": "string",
    "status": "APPROVED | REJECTED | PENDING",
    "requested_amount": number,
    "stage": "CHAT | UNDERWRITE | VERIFY",
    "admin_log": []
  }
]
