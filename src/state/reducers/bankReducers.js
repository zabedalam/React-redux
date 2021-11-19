// const reducer=(state=0,action)=>{
//     switch(action.type){
//         case 'deposit':
//             return state + action.payload;
//             case 'withdraw':
//                 return state - action.payload;
//                 default:
//                     return state
//     }
// }

// export default reducer

//New counter
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      //   if (state <= 0) {
      //     return state;
      //   } else {
      //     return state - action.payload;
      //   }

      return state <= 0
        ? alert("Sorry you can not decrement less than 0") || state
        : state - action.payload;

    default:
      return state;
  }
};

export default reducer;
