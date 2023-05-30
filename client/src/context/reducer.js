import {DISPLAY_ALERT,
    CLEAR_ALERT,
    TOGGLE_SIDEBAR,
    CLEAR_VALUES,
    HANDLE_CHANGE,
    GET_MONTHLY_BILLS_BEGIN,
    GET_MONTHLY_BILLS_SUCCESS,
    VIEW_MONTHLY_BILL_SUCCESS,
    VIEW_MONTHLY_BILL_BEGIN,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_BEGIN,
    DELETE_DEPARTMENT_BEGIN,
    CREATE_DEPARTMENT_BEGIN,
    CREATE_DEPARTMENT_SUCCESS,
    CREATE_DEPARTMENT_ERROR,
    GET_PHONE_MAPPINGS_BEGIN,
    GET_PHONE_MAPPINGS_SUCCESS,
    DELETE_PHONE_MAPPING_BEGIN,
    CREATE_PHONE_MAPPING_BEGIN,
    CREATE_PHONE_MAPPING_SUCCESS,
    CREATE_PHONE_MAPPING_ERROR
} from "./actions"

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {...state, showAlert: true, alertType: "danger", alertText: "There is an error!"}
    }
    if(action.type === CLEAR_ALERT) {
        return {...state, showAlert: false, alertType: "", alertText: ""}
    }
    if(action.type === TOGGLE_SIDEBAR) {
        return {...state, showSidebar: !state.showSidebar}
    }
    if(action.type === CLEAR_VALUES){
        const initialState = {
            Department: "",
            DepartmentID: 1,
            PhoneNumber: "",
        };
        return {
            ...state,
            ...initialState
        };
    }
    if(action.type === HANDLE_CHANGE){
        return {
            ...state,
            [action.payload.name]: action.payload.value,
        };
    }
    if(action.type === GET_MONTHLY_BILLS_BEGIN) {
        return {...state, isLoading: true, showAlert: false}
    }
    if(action.type === GET_MONTHLY_BILLS_SUCCESS) {
        return {...state, isLoading: false,
            monthlyBills: action.payload.monthlyBills,
            totalMonthlyBills: action.payload.totalMonthlyBills,
            numOfPages: action.payload.numOfPages
        }
    }
    if(action.type === VIEW_MONTHLY_BILL_BEGIN) {
        return {...state, isLoading: true, showAlert: false}
    }
    if(action.type === VIEW_MONTHLY_BILL_SUCCESS) {
        return {...state, isLoading: false,
            monthlyBill: action.payload.monthlyBill
        }
    }
    if(action.type === GET_DEPARTMENTS_BEGIN) {
        return {...state, isLoading: true, showAlert: false}
    }
    if(action.type === GET_DEPARTMENTS_SUCCESS) {
        return {...state, isLoading: false,
            departments: action.payload.departments
        }
    }
    if(action.type === DELETE_DEPARTMENT_BEGIN) {
        return {...state, isLoading: true}
    }
    if(action.type === CREATE_DEPARTMENT_BEGIN) {
        return {...state, isLoading: true};
    }
    if(action.type === CREATE_DEPARTMENT_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: "success",
          alertText: "New department created!"
        };
    }
    if(action.type === CREATE_DEPARTMENT_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg
        };
    }
    if(action.type === GET_PHONE_MAPPINGS_BEGIN) {
        return {...state, isLoading: true, showAlert: false}
    }
    if(action.type === GET_PHONE_MAPPINGS_SUCCESS) {
        return {...state, isLoading: false,
            phoneMappings: action.payload.phoneMappings
        }
    }
    if(action.type === DELETE_PHONE_MAPPING_BEGIN) {
        return {...state, isLoading: true}
    }
    if(action.type === CREATE_PHONE_MAPPING_BEGIN) {
        return {...state, isLoading: true};
    }
    if(action.type === CREATE_PHONE_MAPPING_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "New phone mapping created!"
        };
    }
    if(action.type === CREATE_PHONE_MAPPING_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg
        };
    }
    throw new Error(`No such action : ${action.type}`)
}

export default reducer