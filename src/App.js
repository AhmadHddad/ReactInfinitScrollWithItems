import React, {lazy, Suspense} from 'react';
import './App.css';
import {connect} from "react-redux";
import * as actionCreators from './Store/actionCreators.js';
import Items from "./Containers/Items/Items";
// import OneItem from "./Components/OneItem/OneItem";
import {Redirect, Route} from 'react-router-dom';
import Spinner from "./Components/Spinner/Spinner";

const OneItem = lazy(() => import( "./Components/OneItem/OneItem"));

class App extends React.Component {


    render() {

        return (

            <Suspense fallback={<Spinner/>}>
                <Route path='/Item' exact component={OneItem}/>
                <Route path='/' exact component={Items}/>
                <Redirect axact to="/"/>
            </Suspense>

        );
    }
}


const mapStateToProps = state => {
    return {
        items: state.items,
        err:state.err

    }
};
const mapDispatchToProps = dispatch => {
    return {
        getInitialItems: () => dispatch(actionCreators.getInitialItems()),
        getMoreItems: () => dispatch(actionCreators.getMoreItems()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);