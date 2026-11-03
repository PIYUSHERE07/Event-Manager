import React from 'react'
import '../../public/AddEvent.css'
const AddEvent = ({type}) => {
    async function handleAddEvent(event){
        event.preventDefault();
        
        const activityName = (event.target.activityName.value);
        const startDate = (event.target.startDate.value);
        const startTime = (event.target.startTime.value);
        const endDate = (event.target.endDate.value);
        const endTime = (event.target.endTime.value);
        const activityDescription = (event.target.activityDescription.value);
        const activityLink = (event.target.activityLink.value);

        const BACKEND_API = import.meta.env.VITE_BACKEND_API;

        const response = await fetch(`${BACKEND_API}/club/add-activity`,{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                activityName,
                startDate,
                startTime,
                endDate,
                endTime,
                activityDescription,
                activityLink
            })
        })
        console.log(await response.json())
    }
  return (
   <>
    <div className="container">

        <div className="form-header">
            <div className="icon">📝</div>
            <h1>EVENT DETAILS</h1>
        </div>

        <form onSubmit={handleAddEvent}>

            <div className="section-title">
                <span>01</span>
                Basic Information
            </div>

            <div className="form-group">
                <label htmlFor="activity">Type Of Acitvity</label>
                <input type="text" id="activity" name="activityName"  placeholder="Enter activity type" required/>
            </div>

            <div className="section-title">
                <span>02</span>
                Event Schedule
            </div>

            <div className="schedule-box">

                <div className="form-group">
                    <label htmlFor="startDate">EVENT START DATE</label>
                    <input type="date" id="startDate" name="startDate" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="startTime">EVENT START TIME</label>
                    <input type="time" id="startTime" name="startTime" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">EVENT END DATE</label>
                    <input type="date" id="endDate" name="endDate" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="endTime">EVENT END TIME</label>
                    <input type="time" id="endTime" name="endTime" required/>
                </div>

            </div>

            <div className="section-title">
                <span>03</span>
                Event Description
            </div>

            <div className="form-group">
                <label htmlFor="Description">Enter Event Details</label>
                <textarea id="Description" name="activityDescription" rows="5" placeholder="Write something about your event..." required></textarea>
            </div>

            <div className="section-title">
                <span>04</span>
                Event Link
            </div>

            <div className="form-group">
                <label htmlFor="eventLink">Provide Page Link For Event</label>
                <input type="url" id="eventLink" name="activityLink" placeholder="https://example.com"/>
            </div>

            <button type="submit">
                SUBMIT EVENT DETAILS →
            </button>
        </form>

    </div>


   </>
  )
}

export default AddEvent