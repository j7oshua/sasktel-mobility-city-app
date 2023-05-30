import React, { useReducer, useContext } from "react"
import reducer from "./reducer"
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    TOGGLE_SIDEBAR,
    CLEAR_VALUES,
    HANDLE_CHANGE,
    GET_MONTHLY_BILLS_SUCCESS,
    GET_MONTHLY_BILLS_BEGIN,
    VIEW_MONTHLY_BILL_BEGIN,
    VIEW_MONTHLY_BILL_SUCCESS,
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
} from "./actions";
import axios from "axios";

// List of *Global* states that are used throughout the app.
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    showSidebar: false,
    monthlyBill: [],
    monthlyBills: [],
    totalMonthlyBills: 0,
    numOfPagesBills: 1,
    billPage: 1,
    departments: [],
    Department: "",
    DepartmentID: 1,
    PhoneNumber: "",
    phoneMappings: [],
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
    const handleChange = ({name, value}) => {
        dispatch({type: HANDLE_CHANGE, payload: {name, value}});
    }
    const clearValues = () => {
        dispatch({type: CLEAR_VALUES});
    }
    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
    }

    const getMonthlyBills = async () => {
        let url = `/api/v1/monthly_bills/billstotal`;
        dispatch({type:GET_MONTHLY_BILLS_BEGIN});
        try {
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

    const viewBill = async () => {
        let url = `/api/v1/monthly_bills/bills`;
        dispatch({type:VIEW_MONTHLY_BILL_BEGIN});
        try {
            const { data } = await axios.get(url)
            const { monthlyBill } = data;
            dispatch({
                type: VIEW_MONTHLY_BILL_SUCCESS,
                payload: {
                    monthlyBill
                }
            })
        } catch (error) {
            console.log(error.response)
        }
        clearAlert()
    }

    const getDepartments = async () => {
        let url = `/api/v1/departments/view-departments`;
        dispatch({type:GET_DEPARTMENTS_BEGIN});
        try {
            const { data } = await axios.get(url)
            const { departments } = data;
            dispatch({
                type: GET_DEPARTMENTS_SUCCESS,
                payload: {
                    departments
                }
            })
        } catch (error) {
            console.log(error.response)
        }
        clearAlert()
    }

    const createDepartment = async () => {
        let url = `/api/v1/departments/department`;
        dispatch({type:CREATE_DEPARTMENT_BEGIN});
        try {
            const {DepartmentID, Department} = state;
            await axios.post(url, {
                DepartmentID,
                Department
            })
            dispatch({type:CREATE_DEPARTMENT_SUCCESS});
            dispatch({type:CLEAR_VALUES});
        } catch (e) {
            if(e.response.status === 401) return;
            dispatch({
               type: CREATE_DEPARTMENT_ERROR,
               payload: {msg: e.response.data.msg}
            });
        }
        clearAlert()
    }

    const deleteDepartment = async (id) => {
        let url = `/api/v1/departments/${id}`;
        dispatch({type:DELETE_DEPARTMENT_BEGIN});
        try {
            await axios.delete(url);
            await getDepartments();
        } catch (e) {
            console.log(e.response);
        }
    }

    const getPhoneMappings = async () => {
        let url = `/api/v1/phone_mapping/view-phone-mappings`;
        dispatch({type:GET_PHONE_MAPPINGS_BEGIN});
        try {
            const { data } = await axios.get(url)
            const { phoneMappings } = data;
            dispatch({
                type: GET_PHONE_MAPPINGS_SUCCESS,
                payload: {
                    phoneMappings
                }
            })
        } catch (error) {
            console.log(error.response)
        }
        clearAlert()
    }

    const createPhoneMapping = async () => {
        let url = `/api/v1/phone_mapping/phone-mapping`;
        dispatch({type:CREATE_PHONE_MAPPING_BEGIN});
        try {
            const {DepartmentID, Department, PhoneNumber} = state;
            if(PhoneNumber)
            await axios.post(url, {
                DepartmentID,
                Department,
                PhoneNumber
            })
            dispatch({type:CREATE_PHONE_MAPPING_SUCCESS});
            dispatch({type:CLEAR_VALUES});
        } catch (e) {
            if(e.response.status === 401) return;
            dispatch({
                type: CREATE_PHONE_MAPPING_ERROR,
                payload: {msg: e.response.data.msg}
            });
            dispatch({type:CLEAR_VALUES});
        }
        clearAlert();
    }

    const deletePhoneMapping = async (phonenumber) => {
        let url = `/api/v1/phone_mapping/${phonenumber}`;
        dispatch({type:DELETE_PHONE_MAPPING_BEGIN});
        try {
            await axios.delete(url);
            await getPhoneMappings();
        } catch (e) {
            console.log(e.response);
        }
    }

    return <AppContext.Provider value={{...state,
        displayAlert,
        toggleSidebar,
        getMonthlyBills,
        viewBill,
        getDepartments,
        deleteDepartment,
        handleChange,
        createDepartment,
        getPhoneMappings,
        deletePhoneMapping,
        createPhoneMapping,
        clearValues
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}