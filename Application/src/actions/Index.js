import * as LoginAction from './LoginAction';
import * as ChargeAction from './ChargeAction';

const ActionCreators = Object.assign({},
        LoginAction,
        ChargeAction
    );

export default ActionCreators;