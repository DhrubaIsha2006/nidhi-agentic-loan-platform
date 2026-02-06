def calculate_emi(amount, tenure_months=36, rate=0.125):
    monthly_rate = rate / 12
    emi = (amount * monthly_rate) / (1 - (1 + monthly_rate) ** -tenure_months)
    return int(emi)


def check_eligibility(user, amount):
    """
    Rule-based underwriting
    """
    credit_score = user["credit_score"]
    income = user["monthly_income"]
    preapproved = user["preapproved_limit"]

    if credit_score < 700:
        return {
            "status": "REJECTED",
            "reason": "Credit score below eligibility threshold"
        }

    emi = calculate_emi(amount)

    if emi > 0.5 * income:
        return {
            "status": "REJECTED",
            "reason": "EMI exceeds 50% of monthly income"
        }

    if amount <= preapproved:
        return {
            "status": "APPROVED",
            "path": "HAPPY",
            "emi": emi
        }

    if amount <= preapproved * 2:
        return {
            "status": "REVIEW",
            "path": "COMPLEX",
            "emi": emi
        }

    return {
        "status": "REJECTED",
        "reason": "Requested amount exceeds maximum permissible limit"
    }
