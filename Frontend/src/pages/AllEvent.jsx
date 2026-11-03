import { useState , useEffect } from "react"
import Card from "../components/Card";

    function AllEvent(){
    const [activities,setActivities] = useState([]);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_API;
    useEffect(()=>{
        fetch(`${BACKEND_URL}/allActivities`,{
            method: 'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setActivities(data.allActivities);
        })
    },[])

    return(
        <>
        <div>List Of All Events</div>
        <div>
            {
                activities.map((activity)=>{
                    return <Card key={activity._id} activity={activity} />
                })
            }
        </div>
        </>
    )
}

export default AllEvent;