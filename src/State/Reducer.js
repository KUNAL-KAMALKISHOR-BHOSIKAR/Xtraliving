export const initialState={
    user: localStorage.getItem("username") || null,
    isLoggedIn: false
}

function reducer(state, action){
    switch(action.type){
      case "LOG_IN":
        return{
            ...state,
            user:action.user,
            isLoggedIn: true,
        }  
    }
}
export default reducer;