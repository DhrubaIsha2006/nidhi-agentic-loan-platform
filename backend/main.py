from fastapi import FastAPI
import json

from sessions.store import (
    create_session,
    get_session,
    get_all_sessions,
)

from agents.master import handle_message
from agents.verification import verify_salary_slip

app = FastAPI()


# -------------------------
# Health Check
# -------------------------
@app.get("/health")
def health():
    return {"status": "ok"}


# -------------------------
# Session Start (Optional)
# -------------------------
@app.post("/session/start")
def start_session(user_id: str):
    with open("data/users.json") as f:
        users = json.load(f)

    user = next((u for u in users if u["id"] == user_id), None)

    if not user:
        return {"error": "User not found"}

    session = create_session(user)

    return {
        "session_id": session["session_id"],
        "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
    }


# -------------------------
# Chat Message (CORE)
# -------------------------
@app.post("/chat/message")
def chat_message(session_id: str, message: str):
    """
    Main conversational endpoint.
    Session auto-creation is handled INSIDE handle_message.
    """
    return handle_message(session_id, message)


# -------------------------
# Document Upload
# -------------------------
@app.post("/document/upload")
def upload_document(session_id: str, slip_type: str):
    """
    slip_type = happy | borderline | reject
    """
    session = get_session(session_id)

    if not session:
        return {"error": "Invalid session"}

    result = verify_salary_slip(session, slip_type)

    if result["status"] == "REJECTED":
        session["loan"]["status"] = "REJECTED"
        reply = "Sorry 😕 Based on your salary slip, we can’t proceed further."

    else:
        session["stage"] = "UNDERWRITE"
        session["loan"]["status"] = "APPROVED"
        reply = (
            "Thanks for uploading your salary slip 👍 "
            "Everything looks good. Your loan is approved."
        )

    session["messages"].append({
        "role": "assistant",
        "text": reply
    })

    return {
        "reply": reply,
        "status": session["loan"]["status"]
    }


# -------------------------
# Admin View
# -------------------------
@app.get("/admin/applications")
def get_applications():
    applications = []

    for session in get_all_sessions():
        applications.append({
            "session_id": session["session_id"],
            "user": session["user"]["name"],
            "status": session["loan"]["status"],
            "requested_amount": session["loan"]["requested_amount"],
            "stage": session["stage"],
            "admin_log": session["admin_log"]
        })

    return applications
