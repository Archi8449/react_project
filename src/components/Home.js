import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";

export default function Home(){
    const navigate = useNavigate()
    const htoa=()=>{
        navigate("/aboutus")
    }
    const htoc=()=>{
        navigate("/contactus")
    }
    const htoh=()=>{
        navigate("/")
    }
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            {/* <button type="button" onClick={htoa}>AboutUs</button>
            <button type="button" onClick={htoc}>ContactUs</button> */}
            <Button variant="outlined" onClick={htoa}>AboutUs</Button>
            <Button variant="outlined" onClick={htoc}>ContactUs</Button>
            <Button variant="outlined" onClick={htoh}>Stay here</Button>
        </div>
    )
}