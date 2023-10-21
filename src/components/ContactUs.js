import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";

export default function ContactUs(){
    const navigate = useNavigate()
    const ctoh=()=>{
        navigate('/home')
    }
    return(
        <div>
            <h1>Welcome to ContactUs Page</h1>
            {/* <button type="button" onClick={ctoh}>Home</button> */}
            <Button variant="outlined" onClick={ctoh}>Home</Button>
        </div>
    )
}