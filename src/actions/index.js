export const fetchPosts = (title, body) => {
    return {
        type: 'FETCH_POSTS',
        payload: {
            title: title,
            body: body
        }
    }
}