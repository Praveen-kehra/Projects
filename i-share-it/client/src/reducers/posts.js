const {LIKEPOST, UPDATE, DELETE, CREATE, FETCH_ALL} = require('../actionTypes/actionConstants');

// eslint-disable-next-line
export default (posts = [], action) => {
    switch(action.type){
        case LIKEPOST:
            return posts.map((p)=> (p._id === action.payload._id?action.payload:p));
        case DELETE:
            return posts.filter((p) => p._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return posts.map((p)=> (p._id===action.payload._id?action.payload:p));
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}