import {DISPLAY_ALERT,
    CLEAR_ALERT,
    TOGGLE_SIDEBAR,
    GET_MONTHLY_BILLS_BEGIN,
    GET_MONTHLY_BILLS_SUCCESS
} from "./actions"

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {...state, showAlert: true, alertType: "danger", alertText: "There is an error!"}
    }
    if (action.type === CLEAR_ALERT) {
        return {...state, showAlert: false, alertType: "", alertText: ""}
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return {...state, showSidebar: !state.showSidebar}
    }

    if(action.type === GET_MONTHLY_BILLS_BEGIN) {
        return {...state, isLoading: true, showAlert: false}
    }

    if(action.type === GET_MONTHLY_BILLS_SUCCESS) {
        return {...state, isLoading: false, monthlyBills: action.payload.monthlyBills}
    }

    throw new Error(`No such action : ${action.type}`)
}

export default reducer