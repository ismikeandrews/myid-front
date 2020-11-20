// const INITIAL_STATE = {
//     contacts : [],
//     defaultValueContact : null
// }

// const contact = (state = INITIAL_STATE, action) => {

//     if(action.type === "SET_CONTACT"){
//         const contact = action.payload;
//         const {contacts} = state
//         return {...state, contacts :  [...contacts, contact]}
//     }

//     if(action.type === "DEL_CONTACT"){
//         const { cel } = action.payload;
//         const contacts = state.contacts.filter(item => item.cel !== cel)
//         return {...state, contacts }
//     }

//     return state;

// }

// export default contact;