import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [sideDrawerIsVisibe, setSideDrawerVisibility] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerVisibility(false);
    }

    const sideDrawerOpenHandler = () => {
        setSideDrawerVisibility(!sideDrawerIsVisibe);
    }

        return (
            <Aux>
                <Toolbar 
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerOpenHandler}/>
                <SideDrawer 
                    isAuth={props.isAuthenticated}
                    open={sideDrawerIsVisibe} 
                    closed={sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);