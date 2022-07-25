const API = 'http://localhost:8088'

//fetch requests
export const fetchRequests = () => {
    return fetch(`${API}/letterRequest`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            applicationState.serviceRequests = serviceRequests
        }
    )
}

export const fetchAuthors = () => {
    return fetch(`${API}/author`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.authors = data
        }
    )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.topics = data
        }
    )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipient`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.recipients = data
        }
    )
}

const applicationState = {
    letterRequests: [],
    authors: [],
    topics: [],
    recipients: []
}

export const getRequests = () => {
    return applicationState.letterRequests.map(singleServiceRequest => ({...singleServiceRequest}))
}

export const getAuthors = () => {
    return applicationState.authors.map(item => ({...item}))
}

export const getTopics = () => {
    return applicationState.topics.map(item => ({...item}))
}

export const getRecipients = () => {
    
}