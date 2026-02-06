import random

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


def chat_response(user_message: str):
    """
    Generates a human-like response.
    No decision logic here.
    """
    if any(word in user_message.lower() for word in ["loan", "amount", "need"]):
        return random.choice(PROMPTS)

    return random.choice(GREETINGS)
