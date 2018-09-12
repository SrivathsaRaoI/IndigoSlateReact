import { SET_MESSAGE } from "../types";
const initState = {
 message: {response:{data:{banner:{data:{heading:""
}
}
}
}
}
}
export default (state = initState, action) => {
switch(action.type) {
 case SET_MESSAGE :
 return {...state, message: action.payload}
 default :
 return state
 }
}