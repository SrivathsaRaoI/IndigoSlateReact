import { COMMON_API } from "../types";
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
 case COMMON_API :
 return {...state, message: action.payload}
 default :
 return state
 }
}