import types from './Types';

export function SetCharge(charge){
    return {
        type:types.SETCHARGE,
        charge:charge
    };
}