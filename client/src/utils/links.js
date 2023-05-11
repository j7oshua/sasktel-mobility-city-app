import { FaUpload, FaMoneyBillWave, FaPhone } from "react-icons/fa"
import { FcDepartment } from "react-icons/fc"

const links = [
    {
        id: 1,
        text: 'monthly bills',
        path: '/',
        icon: <FaMoneyBillWave />
    },
    {
        id: 2,
        text: 'departments',
        path: 'departments',
        icon: <FcDepartment />
    },
    {
        id: 3,
        text: 'phone mapping',
        path: 'phonemapping',
        icon: <FaPhone />
    },
    {
        id: 4,
        text: 'new bill',
        path: 'upload',
        icon: <FaUpload />
    },
]

export default links