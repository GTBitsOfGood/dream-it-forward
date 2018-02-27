const BASE = 'http://localhost:8080'

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