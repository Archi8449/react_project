import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";

export default function AboutUs(){
    const navigate = useNavigate()
    const atoh=()=>{
        navigate('/home')
    }
    return(
        <div>
            <h1>Welcome to AboutUs Page</h1>
            {/* <button type="button" onClick={atoh}>Home</button> */}
            <Button variant="outlined" onClick={atoh}>Home</Button>
        </div>
    )
}