import re
from agents.chat import chat_response
from agents.underwriting import underwriting_decision
from sessions.store import get_session


def extract_amount(text):
    match = re.search(r"(\d+)", text.replace(",", ""))
    if match:
        return int(match.group())
    return None


def handle_message(session_id: str, user_message: str):
    session = get_session(session_id)

    if not session:
        return {"error": "Invalid session"}

    session["messages"].append({
        "role": "user",
        "text": user_message
    })

    # Try extracting loan amount
    amount = extract_amount(user_message)

    if amount and session["loan"]["requested_amount"] is None:
        session["loan"]["requested_amount"] = amount
        session["stage"] = "UNDERWRITE"

        decision = underwriting_decision(session)

        if decision["status"] == "APPROVED":
            reply = (
                f"Good news 🎉 Based on your profile, "
                f"you’re eligible for this loan. "
                f"Your estimated EMI would be ₹{decision['emi']}."
            )
            session["loan"]["status"] = "APPROVED"

        elif decision["status"] == "REVIEW":
            reply = (
                "Thanks for sharing the amount. 👍 "
                "I’ll need your salary slip to proceed further."
            )
            session["stage"] = "VERIFY"

        else:
            reply = f"Sorry 😕 I can’t proceed because: {decision['reason']}"
            session["loan"]["status"] = "REJECTED"

        session["messages"].append({
            "role": "assistant",
            "text": reply
        })

        return {
            "reply": reply,
            "stage": session["stage"]
        }

    # Default chat behavior
    reply = chat_response(user_message)

    session["messages"].append({
        "role": "assistant",
        "text": reply
    })

    return {
        "reply": reply,
        "stage": session["stage"]
    }
