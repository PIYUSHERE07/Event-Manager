import {useState,useEffect} from "react"
import Card from "../components/Card";
function MyActivities(){
    const [activities,setActivities] = useState([]);
        const BACKEND_URL = import.meta.env.VITE_BACKEND_API;
        useEffect(()=>{
            fetch(`${BACKEND_URL}/club/getMyActivities`,{
                method: 'GET',
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setActivities(data.Activities);
            })
        },[])
    return(
        <>
        <div>List Of My Events</div>
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

export default MyActivities;