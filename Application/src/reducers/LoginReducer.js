import Types from '../actions/Types';

const user = {
    isLogin:false,
    id:"",
    name:"",
    email:""
};

export default (state = user,action)=>{
    switch(action.type){
        case Types.LOGIN:
            return state = action.user;
        case Types.LOGOUT:
            return state = {isLogin:false,id:"",name:"",email:""};
        default:
            return state;
    }
}