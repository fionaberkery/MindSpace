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

export const UserJournalEntriesService = {
    getJournalEntriesById(id) {
        return fetch(`${baseURL}/journals/user?userid=${id}`)
        .then(res => res.json())
    }
}

// export const UserJournalEntriesService = {
//     getJournalEntriesByUserName(name) {
//         return fetch(`${baseURL}/journals/user?userid=${name}`)
//         .then(res => res.json())
//     }
// }

export const PostJournalEntry = (payload) => {
    const url = `${baseURL}/journal`
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const PostNewUser = (payload) => {
    const url = `${baseURL}/users`
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

// export const AudioService =  {
//     getAudios() {
//         return fetch(`${baseURL}/audio`)
//         .then(res => res.json());
//     }
// }

