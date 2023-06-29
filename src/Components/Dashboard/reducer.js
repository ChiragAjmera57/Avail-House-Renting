import { useReducer } from "react";
import { initialState } from "./initialState";

const reducer = (paylod,action) => {
   
    switch (action.type) {
        case "GET_HOUSE_DETAILS_REQUEST":
            return {
                ...initialState,
                data: [],
	        isLoading: true,
	        isError: false,
            }
        case "GET_HOUSE_DETAILS_SUCCESS":
            return {
                ...initialState,
                data: action.paylod,
                isLoading: false,
                isError: false,
            }
            case "GET_HOUSE_DETAILS_FAILURE":
                return {
                    ...initialState,
                    data: [],
                    isLoading: false,
                    isError: true,
                }
    }
};

export { reducer };
