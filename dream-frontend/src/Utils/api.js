const BASE = 'http://localhost:8080'

export async function login(email, password) {
    const res = await fetch(BASE + '/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    return data;
}