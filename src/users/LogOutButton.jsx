import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearButton } from '../theme';
import { logOut } from '../store/user';


let LogOutButton = (props) => {
    let dispatch = useDispatch();
    // let navigate = useNavigate();

    let LogOutUser = () => {
        dispatch(
            logOut()
        )
    }
    return (
        <ClearButton className={props.className} onClick={LogOutUser}>
            Cerrar Sesion
        </ClearButton>
    )
}

export default LogOutButton;