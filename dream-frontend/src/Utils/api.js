// let temp = window.location.origin.split(":")
// temp[1] = temp[1] + '/'
// const BASE = temp.join(':')
const BASE = window.location.origin;

export async function login(email, password) {
    const res = await fetch(BASE + '/api/login', {
        method: 'POST',
        body: JSON.stringify({ username: email, password: password }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}

export async function register(email, password) {
    const res = await fetch(BASE + '/api/register', {
        method: 'POST',
        body: JSON.stringify({ username: email, password: password }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}

export async function verifyToken(token) {
    const res = await fetch(BASE + '/api/token/verify', {
        method: 'PUT',
        body: JSON.stringify({ token: token }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}