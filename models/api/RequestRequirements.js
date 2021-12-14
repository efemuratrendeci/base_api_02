class RequestRequirements {
    static 'POST-/auth/connect' = ['password'];
    static 'POST-/supervisor/user' = ['email', 'username', 'password'];
    static 'POST-/supervisor/company_config' = ['erp_name'];
}

export default RequestRequirements;