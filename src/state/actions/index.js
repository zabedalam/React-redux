// export const depositMoney = (amount) => {
//   return (dispatch) => {
//     dispatch({
//       type: "deposit",
//       payload: amount,
//     });
//   };
// };

// export const withdrawMoney = (amount) => {
//   return (dispatch) => {
//     dispatch({
//       type: "withdraw",
//       payload: amount,
//     });
//   };
// };

//New counter
export const incrementCounter=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'increment',
            payload:amount
        })
    }
}

export const decrementCounter=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'decrement',
            payload:amount
        })
    }
}