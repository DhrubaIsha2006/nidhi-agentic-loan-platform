from utils.rules import check_eligibility


def underwriting_decision(session):
    user = session["user"]
    amount = session["loan"]["requested_amount"]

    decision = check_eligibility(user, amount)

    session["admin_log"].append({
        "step": "UNDERWRITING",
        "decision": decision
    })

    return decision
