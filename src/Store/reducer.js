import * as actionTypes from './actionTypes.js';


let initialState = {
    items: [],
    oneItem: [],
    err: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_INITIAL_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.initialItems,
            };

        case actionTypes.GET_INITIAL_ITEMS_FAIL:
            return {
                ...state,
                err:action.err,
            }
        case actionTypes.GET_MORE_ITEMS_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.moreItems),

            };
        case actionTypes.GET_MORE_ITEMS_FAIL:
            return {
                ...state,
                err: action.err,
            }
        case actionTypes.GET_ONE_ITEM_SUCCESS:
            return {
                ...state,
                oneItem: action.oneItem,
                err:null
            };
        case actionTypes.GET_ONE_ITEM_FAIL:
            return {
                ...state,
                err:action.err
            };

        default:
            return state

    }

};

export default reducer;