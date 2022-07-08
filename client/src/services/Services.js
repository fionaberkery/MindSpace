const baseURL = 'http://localhost:8080';

export const UserService =  {
    getUsers() {
        return fetch(`${baseURL}/users`)
        .then(res => res.json());
    }
}

export const JournalEntryService =  {
    getJournalEntries() {
        return fetch(`${baseURL}/journals`)
        .then(res => res.json());
    }
}

export const PostJournalEntry = (payload) => {
    const url = `${baseURL}/journals`
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const AudioService =  {
    getAudios() {
        return fetch(`${baseURL}/audio`)
        .then(res => res.json());
    }
}

