import { GetUsersData, LoginSuccess, LoginUpdate, LogoutUpdate, SignUpFail, SignUpRequest, SignUpSuccess, upDateOrder } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    Users:[],
    loginUser:{}
}

export const reducer = (state=initialState,{type,payload})=>{
    console.log(type,"reducer")
    switch(type){
        case SignUpRequest:{
            return{
                ...state,isLoading:true
            }
        }
        case SignUpSuccess:{
            return{
                ...state,isLoading:false,Users:[...state.Users,payload]
            }
        }
        case SignUpFail:{
            return{
                ...state,isLoading:false,isError:true
            }
        }
        case GetUsersData:{
            return{
                ...state,Users:payload
            }
        }
       case LoginUpdate:{
       console.log("hiii")
        return{
            ...state,isAuth:true,loginUser:payload
        }
       }
       case LogoutUpdate:{
        return{
            ...state,isAuth:false,loginUser:{}
        }
       }
       case upDateOrder:{
        return{
            ...state,isAuth:false,[loginUser.Order]:payload
        }
       }


        default: return state
    }
}