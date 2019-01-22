export function setLocalUser(user) {
    localStorage.setItem('__vue__todo__app__user__', JSON.stringify(user));
}

export function removeLocalUser() {
    localStorage.removeItem('__vue__todo__app__user__');
}
