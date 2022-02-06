import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Navigation = (props) => {

    const {drawerWidth} = props
    const [open, setOpen] = useState(false)

    const handleDrawerSwitch = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Navbar onSwitch={handleDrawerSwitch} open={open} drawerWidth={drawerWidth}/>
            <Sidebar onSwitch={handleDrawerSwitch} open={open} drawerWidth={drawerWidth}/>
        </div>
    )

}

export default Navigation