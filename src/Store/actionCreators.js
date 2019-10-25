import * as actionTypes from './actionTypes.js';
import axios from "axios";

export const getInitialItems = () => {

    return dispatch => {
        const url = "?count=5";
        axios.get(url).then(res => (dispatch(getInitialItemsSuccess(res.data)))).catch(err => {
            dispatch(getInitialItemsFail(err.message))
        })
    }

};

export const getInitialItemsSuccess = initialItems => {
    return {
        type: actionTypes.GET_INITIAL_ITEMS_SUCCESS, initialItems: initialItems
    }
};


export const getInitialItemsFail = err => {
    return {
        type: actionTypes.GET_INITIAL_ITEMS_FAIL, err: err
    }
};


export const getMoreItems = (offset) => {
    return dispatch => {
            offset = Number(offset)+1;
        const url = "?offset="+offset+"&count=5";
        axios.get(url).then(res => (
            dispatch(getMoreItemsSuccess(res.data))
        )).catch(err => dispatch(getMoreItemsFail(err.message)))
    }
};

export const getMoreItemsSuccess = moreItems => {
    return {
        type: actionTypes.GET_MORE_ITEMS_SUCCESS, moreItems: moreItems
    }
};


export const getMoreItemsFail = err => {
    return {
        type: actionTypes.GET_MORE_ITEMS_FAIL, err: err
    }
}


export const getOneItem = (id) => {

    return dispatch => {
        const url = "/item?id=" + id;
        axios.get(url).then(res => (dispatch(getOneItemSuccess(res.data)))).catch(err => dispatch(getOneItemFail(err.message)))
    }
};

export const getOneItemSuccess = oneItem => {
    return {
        type: actionTypes.GET_ONE_ITEM_SUCCESS, oneItem: oneItem
    }
};

export const getOneItemFail = err => {
    return {
        type: actionTypes.GET_ONE_ITEM_FAIL, err: err
    }
}


