

const InitState = {

  eData: {} 

}


export function cReduc (state = InitState, action) {

  
   // console.log(action)


  switch (action.type) {

    

  case 'GET_DATA':

    return {

      eData: [...state.eData, action.action]

    }

  default:

    return state

  }

}

