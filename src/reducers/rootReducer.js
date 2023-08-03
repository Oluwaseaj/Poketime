const initiate = {
    posts: [
                { id: "1", title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'},
                { id: "2", title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'},
                { id: "3", title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'},
]
}
const rootReducer = (state = initiate, action) => {
  if (action.type === "DELETE_POST"){
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id
      })
      return {
          ...state,
          posts:newPosts
      }
  }
    return state;
}



export default rootReducer;