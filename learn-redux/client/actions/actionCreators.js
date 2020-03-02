// This all happens synchronously. If you need to use async, (ex. calling an api), then checkout the following:
    // Redux-saga: https://github.com/redux-saga/redux-saga
    // Redux-thunk: https://github.com/gaearon/redux-thunk
// If getting a large, complex JSON returned, consider using:
    // Normalizr: https://github.com/paularmstrong/normalizr


// increment
export function increment(index) {
    debugger;
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
