function AddCouncil(){
    return(
    <>
        <div className="container">

            <div className="form-header">
                <div className="icon">✦</div>
                <h1>Club Registeration Form</h1>
                <p>Plan your event. Share the details. Make it happen.</p>
            </div>

            <form>

                <div className="section-title">
                    <span>01</span>
                    Basic Information
                </div>

            <div className="form-group">
                <p>Choose type of Club</p>
                <div className="club-options">
                    <input type="radio" id="sports" name="Type of Club" value="Sports"/>
                    <label for="sports">Sports</label>

                    <input type="radio" id="cultural" name="Type of Club" value="Cultural"/>
                    <label for="cultural">Cultural</label>

                    <input type="radio" id="technical" name="Type of Club" value="Technical"/>
                    <label for="technical">Technical</label>
                </div>
            </div>
        

                    <div className="section-title">
                    <span>02</span>
                    Name of Club
                </div>

            <div className="form-group">
                    <label for="session">NAME OF CLUB</label>
                    <input type="text" id="session" name="session"  placeholder="enter club name " required />
                </div>

                <div className="section-title">
                    <span>03</span>
                    Club Email
                </div>

                <div className="form-group">
                    <label for="eventlink">Create Email for Club</label>
                    <input type="email" id="eventlink" name="eventlink" placeholder="xyz@gmail.com" />
                </div>

                <div className="section-title">
                    <span>04</span>
                    Club Password
                </div>

            <label for="pwd">Password</label>
            <input type="password" id="pwd" value="private info" name="pwd" required />
            <br/><br/> 
            

                <button type="submit">
                    SUBMIT EVENT DETAILS →
                </button>

                <p className="footer-text">CREDIT-PIYUSH MALEWAR</p>

            </form>

        </div>
    </>
)}

export default AddCouncil;