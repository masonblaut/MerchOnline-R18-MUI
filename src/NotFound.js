import { Link } from "react-router-dom"
export default function NotFound(){
    return (
        <div>
            <h2> 404 NOT FOUND </h2>
            <p>Lorem Lorem Ipsum </p><br></br>
            <p>Go to the <Link to="/">HomePage</Link></p>
        </div>
    )
}