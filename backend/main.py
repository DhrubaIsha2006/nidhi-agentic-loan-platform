# # from fastapi import FastAPI
# # import json

# # from sessions.store import (
# #     create_session,
# #     get_session,
# #     get_all_sessions,
# # )

# # from agents.master import handle_message
# # from agents.verification import verify_salary_slip

# # app = FastAPI()


# # # -------------------------
# # # Health Check
# # # -------------------------
# # @app.get("/health")
# # def health():
# #     return {"status": "ok"}


# # # -------------------------
# # # Session Start (Optional)
# # # -------------------------
# # @app.post("/session/start")
# # def start_session(user_id: str):
# #     with open("data/users.json") as f:
# #         users = json.load(f)

# #     user = next((u for u in users if u["id"] == user_id), None)

# #     if not user:
# #         return {"error": "User not found"}

# #     session = create_session(user)

# #     return {
# #         "session_id": session["session_id"],
# #         "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
# #     }


# # # -------------------------
# # # Chat Message (CORE)
# # # -------------------------
# # @app.post("/chat/message")
# # def chat_message(session_id: str, message: str):
# #     """
# #     Main conversational endpoint.
# #     Session auto-creation is handled INSIDE handle_message.
# #     """
# #     return handle_message(session_id, message)


# # # -------------------------
# # # Document Upload
# # # -------------------------
# # @app.post("/document/upload")
# # def upload_document(session_id: str, slip_type: str):whats
# #     """
# #     slip_type = happy | borderline | reject
# #     """
# #     session = get_session(session_id)

# #     if not session:
# #         return {"error": "Invalid session"}

# #     result = verify_salary_slip(session, slip_type)

# #     if result["status"] == "REJECTED":
# #         session["loan"]["status"] = "REJECTED"
# #         reply = "Sorry 😕 Based on your salary slip, we can’t proceed further."

# #     else:
# #         session["stage"] = "UNDERWRITE"
# #         session["loan"]["status"] = "APPROVED"
# #         reply = (
# #             "Thanks for uploading your salary slip 👍 "
# #             "Everything looks good. Your loan is approved."
# #         )

# #     session["messages"].append({
# #         "role": "assistant",
# #         "text": reply
# #     })

# #     return {
# #         "reply": reply,
# #         "status": session["loan"]["status"]
# #     }


# # # -------------------------
# # # Admin View
# # # -------------------------
# # @app.get("/admin/applications")
# # def get_applications():
# #     applications = []

# #     for session in get_all_sessions():
# #         applications.append({
# #             "session_id": session["session_id"],
# #             "user": session["user"]["name"],
# #             "status": session["loan"]["status"],
# #             "requested_amount": session["loan"]["requested_amount"],
# #             "stage": session["stage"],
# #             "admin_log": session["admin_log"]
# #         })

# #     return applications

# # from fastapi import FastAPI, UploadFile, File, Form
# # from fastapi.middleware.cors import CORSMiddleware

# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],  # allow frontend during development
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # from pydantic import BaseModel
# # import json
# # import uuid

# # sessions = {}
# from fastapi import FastAPI, UploadFile, File, Form
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import json
# import uuid

# from sessions.store import (
#     create_session,
#     get_session,
#     get_all_sessions,
# )

# from agents.master import handle_message
# from agents.verification import verify_salary_slip


# # ✅ CREATE APP FIRST
# # app = FastAPI()

# # ✅ ADD CORS AFTER APP CREATION
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],  # for development
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:3000",
#         "http://127.0.0.1:3000",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # sessions = {}


# # from sessions.store import (
# #     create_session,
# #     get_session,
# #     get_all_sessions,
# # )

# # from agents.master import handle_message
# # from agents.verification import verify_salary_slip

# # app = FastAPI()

# # -------------------------
# # CORS (MANDATORY)
# # -------------------------
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )


# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],  # for development
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # -------------------------
# # Models
# # -------------------------
# class SessionStartRequest(BaseModel):
#     user_id: str

# class ChatRequest(BaseModel):
#     session_id: str
#     message: str

# class ChatResponse(BaseModel):
#     reply: str
#     stage: str | None = None
#     loan_status: str | None = None

# @app.get("/users")
# def get_users():
#     with open("data/users.json") as f:
#         users = json.load(f)
#     return users


# # -------------------------
# # Health
# # -------------------------
# @app.get("/health")
# def health():
#     return {"status": "ok"}

# # -------------------------
# # Start Session
# # -------------------------
# # @app.post("/session/start")
# # def start_session(data: SessionStartRequest):
# #     with open("data/users.json") as f:
# #         users = json.load(f)

# #     user = next((u for u in users if u["id"] == data.user_id), None)

# #     if not user:
# #         return {"error": "User not found"}

# #     session = create_session(user)

# #     return {
# #         "session_id": session["session_id"],
# #         "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
# #     }
# # @app.post("/session/start")
# # def start_session(data: SessionStartRequest):
# #     with open("data/users.json") as f:
# #         users = json.load(f)

# #     user = next((u for u in users if u["id"] == data.user_id), None)

# #     if not user:
# #         return {"error": "User not found"}

# #     session = {
# #         "session_id": str(uuid.uuid4()),
# #         "user_id": user["id"],
# #         "name": user["name"],
# #     }

# #     sessions[session["session_id"]] = session

# #     return {
# #         "session_id": session["session_id"],
# #         "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
# #     }
# @app.post("/session/start")
# def start_session(data: SessionStartRequest):
#     with open("data/users.json") as f:
#         users = json.load(f)

#     user = next((u for u in users if u["id"] == data.user_id), None)

#     if not user:
#         return {"error": "User not found"}

#     # ✅ USE STORE.PY FUNCTION
#     session = create_session(user)

#     return {
#         "session_id": session["session_id"],
#         "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
#     }
# # -------------------------
# # Chat (CORE)
# # -------------------------
# # @app.post("/chat/message", response_model=ChatResponse)
# # def chat_message(data: ChatRequest):
# #     result = handle_message(
# #         data.session_id,
# #         data.message
# #     )

# #     return {
# #         "reply": result["reply"],
# #         "stage": result.get("stage"),
# #         "loan_status": result.get("loan_status")
# #     }
# @app.post("/chat/message", response_model=ChatResponse)
# def chat_message(data: ChatRequest):
#     try:
#         result = handle_message(data.session_id, data.message)

#         if not result:
#             return {
#                 "reply": "I'm not sure how to respond to that.",
#                 "stage": None,
#                 "loan_status": None
#             }

#         return {
#             "reply": result.get("reply", "I'm not sure how to respond to that."),
#             "stage": result.get("stage"),
#             "loan_status": result.get("loan_status")
#         }

#     except Exception as e:
#         print("CHAT ERROR:", e)
#         return {
#             "reply": "Internal server error occurred.",
#             "stage": None,
#             "loan_status": None
#         }
# # @app.post("/chat/message")
# # def chat_message(data: ChatRequest):
# #     try:
# #         result = handle_message(
# #             session_id=data.session_id,
# #             message=data.message
# #         )

# #         return {
# #             "reply": result.get("reply", "No reply"),
# #             "stage": result.get("stage"),
# #             "loan_status": result.get("loan_status")
# #         }

# #     except Exception as e:
# #         print("CHAT ERROR:", e)
# #         return {
# #             "reply": "Internal error occurred.",
# #             "stage": None,
# #             "loan_status": None
# #         }
# # @app.post("/chat/message")
# # def chat_message(data: ChatRequest):
# #     try:
# #         result = handle_message(data.session_id, data.message)

# #         return {
# #             "reply": result.get("reply", "No reply"),
# #             "stage": result.get("stage"),
# #             "loan_status": result.get("loan_status")
# #         }

# #     except Exception as e:
# #         print("CHAT ERROR:", e)
# #         return {
# #             "reply": "Internal error occurred.",
# #             "stage": None,
# #             "loan_status": None
# #         }

# # @app.post("/chat/session")
# # def create_session(data: dict):
# #     session_id = str(uuid.uuid4())

# #     sessions[session_id] = {
# #         "user_id": data["user_id"],
# #         "messages": []
# #     }

# #     return {"session_id": session_id}

# # -------------------------
# # Document Upload
# # -------------------------
# # @app.post("/document/upload")
# # def upload_document(session_id: str, slip_type: str):
# #     session = get_session(session_id)

# #     if not session:
# #         return {"error": "Invalid session"}

# #     result = verify_salary_slip(session, slip_type)

# #     if result["status"] == "REJECTED":
# #         session["loan"]["status"] = "REJECTED"
# #         reply = "Sorry 😕 Based on your salary slip, we can’t proceed further."
# #     else:
# #         session["stage"] = "UNDERWRITE"
# #         session["loan"]["status"] = "APPROVED"
# #         reply = (
# #             "Thanks for uploading your salary slip 👍 "
# #             "Everything looks good. Your loan is approved."
# #         )

# #     session["messages"].append({
# #         "role": "assistant",
# #         "text": reply
# #     })

# #     return {
# #         "reply": reply,
# #         "status": session["loan"]["status"]
# #     }

# # from fastapi import UploadFile, File, Form

# @app.post("/document/upload")
# async def upload_document(
#     session_id: str = Form(...),
#     file: UploadFile = File(...)
# ):
#     session = get_session(session_id)

#     if not session:
#         return {"error": "Invalid session"}

#     # For demo, we simulate slip type from filename
#     filename = file.filename.lower()

#     if "reject" in filename:
#         slip_type = "reject"
#     elif "borderline" in filename:
#         slip_type = "borderline"
#     else:
#         slip_type = "happy"

#     result = verify_salary_slip(session, slip_type)

#     if result["status"] == "REJECTED":
#         session["loan"]["status"] = "REJECTED"
#         reply = "Sorry 😕 Based on your salary slip, we can’t proceed."
#     else:
#         session["stage"] = "UNDERWRITE"
#         session["loan"]["status"] = "APPROVED"
#         reply = "Salary slip verified 👍 Loan approved!"

#     session["messages"].append({
#         "role": "assistant",
#         "text": reply
#     })

#     return {
#         "reply": reply,
#         "status": session["loan"]["status"]
#     }

# # -------------------------
# # Admin
# # -------------------------
# @app.get("/admin/applications")
# def get_applications():
#     return [
#         {
#             "session_id": s["session_id"],
#             "user": s["user"]["name"],
#             "status": s["loan"]["status"],
#             "requested_amount": s["loan"]["requested_amount"],
#             "stage": s["stage"],
#             "admin_log": s["admin_log"]
#         }
#         for s in get_all_sessions()
#     ]



from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

from sessions.store import (
    create_session,
    get_session,
    get_all_sessions,
)

from agents.master import handle_message
from agents.verification import verify_salary_slip


# -------------------------
# App Init
# -------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# -------------------------
# Models
# -------------------------
class SessionStartRequest(BaseModel):
    user_id: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatResponse(BaseModel):
    reply: str
    stage: str | None = None
    loan_status: str | None = None


# -------------------------
# Health
# -------------------------
@app.get("/health")
def health():
    return {"status": "ok"}


# -------------------------
# Get Users
# -------------------------
@app.get("/users")
def get_users():
    try:
        with open(os.path.join(BASE_DIR, "data", "users.json")) as f:
            return json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail="users.json not found")


# -------------------------
# Start Session
# -------------------------
@app.post("/session/start")
def start_session(data: SessionStartRequest):
    try:
        with open(os.path.join(BASE_DIR, "data", "users.json")) as f:
            users = json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail="users.json not found")

    user = next((u for u in users if u["id"] == data.user_id), None)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    session = create_session(user)

    return {
        "session_id": session["session_id"],
        "message": f"Hi {user['name']} 👋 I’m NIDHI. How can I help you today?"
    }


# -------------------------
# Chat (CORE)
# -------------------------
@app.post("/chat/message", response_model=ChatResponse)
def chat_message(data: ChatRequest):

    session = get_session(data.session_id)

    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    try:
        result = handle_message(data.session_id, data.message)

        if not result:
            return ChatResponse(
                reply="I'm not sure how to respond to that."
            )

        return ChatResponse(
            reply=result.get("reply", "I'm not sure how to respond."),
            stage=result.get("stage"),
            loan_status=result.get("loan_status")
        )

    except Exception as e:
        print("CHAT ERROR:", e)
        raise HTTPException(status_code=500, detail="Chat processing failed")


# -------------------------
# Document Upload
# -------------------------
@app.post("/document/upload")
async def upload_document(
    session_id: str = Form(...),
    file: UploadFile = File(...)
):
    session = get_session(session_id)

    if not session:
        raise HTTPException(status_code=404, detail="Invalid session")

    filename = file.filename.lower()

    if "reject" in filename:
        slip_type = "reject"
    elif "borderline" in filename:
        slip_type = "borderline"
    else:
        slip_type = "happy"

    result = verify_salary_slip(session, slip_type)

    if result["status"] == "REJECTED":
        session["loan"]["status"] = "REJECTED"
        reply = "Sorry 😕 Based on your salary slip, we can’t proceed."
    else:
        session["stage"] = "UNDERWRITE"
        session["loan"]["status"] = "APPROVED"
        reply = "Salary slip verified 👍 Loan approved!"

    session["messages"].append({
        "role": "assistant",
        "text": reply
    })

    return {
        "reply": reply,
        "status": session["loan"]["status"]
    }


# -------------------------
# Admin
# -------------------------
@app.get("/admin/applications")
def get_applications():
    return [
        {
            "session_id": s["session_id"],
            "user": s["user"]["name"],
            "status": s["loan"]["status"],
            "requested_amount": s["loan"]["requested_amount"],
            "stage": s["stage"],
            "admin_log": s["admin_log"]
        }
        for s in get_all_sessions()
    ]