import React from 'react'
import '../../public/AddEvent.css'
const AddEvent = () => {
  return (
   <>
    <div className="container">

        <div className="form-header">
            <div className="icon">📝</div>
            <h1>EVENT DETAILS</h1>
        </div>

        <form>

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
                <textarea id="Description" name="eventDescription" rows="5" placeholder="Write something about your event..." required></textarea>
            </div>

            <div className="section-title">
                <span>04</span>
                Event Link
            </div>

            <div className="form-group">
                <label htmlFor="eventLink">Provide Page Link For Event</label>
                <input type="url" id="eventLink" name="eventLink" placeholder="https://example.com"/>
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