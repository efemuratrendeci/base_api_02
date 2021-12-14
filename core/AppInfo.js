//* Switching application mode by this class. You can define your test db connection and prod db connection here
class AppInfo {
    static PORT = process.env.APPLICATION_MODE === 'prod' ? process.env.PROD_PORT : process.env.DEV_PORT || 6901;
    static JWT_SECRET = process.env.JWT_SECRET;
}

export default AppInfo;