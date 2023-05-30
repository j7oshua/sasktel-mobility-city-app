import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import MonthlyBill from "./MonthlyBill";

/**
 * This component helps to iterate through the monthly bills and displays them on screen. Pagination feature still needs
 * to be implemented.
 * @returns {JSX.Element}
 * @constructor
 */
const MonthlyBillsContainer = () => {
    const {getMonthlyBills, monthlyBills, isLoading, totalMonthlyBills} = useAppContext();
    useEffect(() => {
        getMonthlyBills();
    }, [])
    if (isLoading){
        return  <Loading center />
    }

    if (monthlyBills.length === 0){
        return (
            <Wrapper>
                <h2>No monthly bills to display...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>{totalMonthlyBills} monthly bill{totalMonthlyBills.length > 1 && 's'} found</h5>
            <div className="jobs">
                {monthlyBills.map((bill, index) => {
                    return (
                        <MonthlyBill key={index} {...bill}/>
                    )
                })}
            </div>
            {/* Pagination Buttons */}
        </Wrapper>
    )
};

export default MonthlyBillsContainer;