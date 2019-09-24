import Types from '../actions/Types';

const user = {
    isLogin:false,
    name:"",
    email:""
};

export default (state = user,action)=>{
    switch(action.type){
        case Types.LOGIN:
            console.log(action.user);
            return state = action.user;
        case Types.LOGOUT:
            return state = {isLogin:false,name:"",email:""};
        default:
            return state;
    }
}