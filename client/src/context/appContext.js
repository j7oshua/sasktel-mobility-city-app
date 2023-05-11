import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT,
    CLEAR_ALERT,
    TOGGLE_SIDEBAR,
    GET_MONTHLY_BILLS_SUCCESS,
    GET_MONTHLY_BILLS_BEGIN
} from "./actions";
import axios from "axios";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    showSidebar: false,
    monthlyBills: [],
    totalMonthlyBills: 0,
    numOfPagesBills: 1,
    billPage: 1,
    name: "",
    email: "",
    password: "",
    isMember: true
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }

    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
    }

    const getMonthlyBills = async () => {
        let url = `/bills`
        dispatch({type:GET_MONTHLY_BILLS_BEGIN})
        try {
            //     const showData = await axios.get("/api/v1/monthly_bills/bills")
            //     console.log(showData.data.result1.recordset)
            const { data } = await axios.get(url)
            const { monthlyBills,  totalMonthlyBills, numOfPages } = data;
            dispatch({
                type: GET_MONTHLY_BILLS_SUCCESS,
                payload: {
                    monthlyBills,
                    totalMonthlyBills,
                    numOfPages
                }
            })
        } catch (error) {
            console.log(error.response)
        }
        clearAlert()
    }

    return <AppContext.Provider value={{...state, displayAlert, toggleSidebar}}>
        {children}
    </AppContext.Provider>
}

// Custom hook - Just used to
const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}