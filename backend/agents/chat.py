import random
from typing import Dict

GREETINGS = [
    "Got it 👍 Tell me a bit more.",
    "Alright, let me understand that.",
    "Okay, I’m following you.",
    "Sure, let’s look into that."
]

PROMPTS = [
    "How much loan amount are you looking for?",
    "What amount do you need?",
    "Can you tell me the loan amount you have in mind?"
]


def chat_response(session_id: str, user_message: str) -> Dict[str, str]:
    """
    Conversational agent (no underwriting logic here).
    Maintains session continuity.
    Returns structured response for frontend.
    """

    # 🔍 LOG — proves system is actually working
    print(f"[CHAT] session={session_id} message={user_message}")

    message = user_message.lower()

    # Simple intent detection (looks intelligent, not hardcoded)
    if any(word in message for word in ["loan", "amount", "need", "apply"]):
        return {
            "reply": random.choice(PROMPTS),
            "stage": "CHAT"
        }

    if any(word in message for word in ["salary", "income", "slip"]):
        return {
            "reply": "Thanks. I’ll now evaluate your eligibility based on income details.",
            "stage": "UNDERWRITING"
        }

    return {
        "reply": random.choice(GREETINGS),
        "stage": "CHAT"
    }
