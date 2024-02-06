import { SidbarStatusContext } from "./SidbarStatusContext";
import { useState } from 'react'
import { rows } from "../Datas";
import { productRows } from "../Datas";

const GlobalContext = ({ children }) => {

    const [menuStatus, setMenuStatus] = useState(false)
    const [rowInfo, setRowInfo] = useState(rows)
    const [productrow, setProductRow] = useState(productRows)



    return (
        <SidbarStatusContext.Provider value={{ menuStatus, setMenuStatus, rowInfo, setRowInfo, productrow, setProductRow }}>
            {children}
        </SidbarStatusContext.Provider>
    )
}

export default GlobalContext;







