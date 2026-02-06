import uuid

# In-memory session store
SESSIONS = {}


def create_session(user):
    """
    Create a new session for a user
    """
    session_id = str(uuid.uuid4())

    session = {
        "session_id": session_id,
        "user": user,
        "stage": "CHAT",  # CHAT -> VERIFY -> UNDERWRITE -> SANCTION
        "loan": {
            "requested_amount": None,
            "emi": None,
            "status": "IN_PROGRESS"
        },
        "messages": [],
        "admin_log": []
    }

    SESSIONS[session_id] = session
    return session


def get_session(session_id):
    return SESSIONS.get(session_id)


def update_session(session_id, data):
    if session_id in SESSIONS:
        SESSIONS[session_id].update(data)


def get_all_sessions():
    return list(SESSIONS.values())
