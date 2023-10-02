

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    darkMode:false,
    length:0,



export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case getProductRequest:
            return {...state,isLoading:true};
        case getProductSuccess:
            return {...state,isLoading:false,products:payload}
        case getProductFail:
            return {...state,isLoading:false,isError:true}
        case DarkMode:
            return {...state,darkMode:!state.darkMode}
        case TotalData:

        default: return state
    }
}