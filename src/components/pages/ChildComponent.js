
import { useContext } from "react";
import UserContext from './MyHooks';

export default function ChildComponent() {
    const user = useContext(UserContext);
    console.log("UserContext : ", UserContext);

    return (
        <div>
            <h2>Inside Child component where context will be consumed</h2>
            <h2>User name here is {user}</h2>
        </div>
        )
}
