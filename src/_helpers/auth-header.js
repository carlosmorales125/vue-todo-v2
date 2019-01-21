export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('__vue__todo__app__user__'));

    if (user && user.token) {
        return { 'Authorization': `Bearer ${user.token}` };
    } else {
        return {};
    }
}