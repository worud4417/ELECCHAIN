import Types from '../actions/Types';

const charge = {
    id:"",
    name:"",
    balance:0
};

export default (state = charge,action)=>{
    switch(action.type){
        case Types.SETCHARGE:
            return state = action.charge;
        default:
            return state;
    }
}