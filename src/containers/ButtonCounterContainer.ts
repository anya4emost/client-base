import {connect} from "react-redux";
import {Button} from "../components/button/Button";
import {myAction} from "../store/actions/action";

const mapStateToProps = (state) => {
    return {
        text: state.reducer.counter
    }
};

const mapDispatchToProps = {onClick: ()=>{return myAction} };

export const ButtonCounter = connect(mapStateToProps, mapDispatchToProps)(Button);