const Auth = {
    loggedIn: false,
    authenticate(cb) {
        this.loggedIn = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}
export default Auth