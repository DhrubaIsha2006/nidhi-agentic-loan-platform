def verify_salary_slip(session, slip_type):
    """
    slip_type: happy | borderline | reject
    """

    session["admin_log"].append({
        "step": "VERIFICATION",
        "slip_type": slip_type
    })

    if slip_type == "reject":
        return {
            "status": "REJECTED",
            "reason": "Income insufficient based on salary slip"
        }

    if slip_type == "borderline":
        return {
            "status": "REVIEW",
            "note": "Income borderline, proceeding with EMI check"
        }

    return {
        "status": "VERIFIED"
    }
