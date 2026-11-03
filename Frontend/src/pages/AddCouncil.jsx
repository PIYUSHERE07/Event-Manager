function AddCouncil(){
    
    function handelForm(event){
        const response = fetch("http://localhost:3000/admin/councilLogin",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                councilEmail:event.councilEmail,
                councilPassword:event.councilPassword,
                conformPassword:event.conformPassword,
                councilName: event.councilName,
                councilCategory: event.councilCategory
            })
        })
    }

    return(
    <>
        <div className="container">

            <div className="form-header">
                <div className="icon">✦</div>
                <h1>Club Registeration Form</h1>
                <p>Plan your event. Share the details. Make it happen.</p>
            </div>

            <form onSubmit={handelForm}>

                <div className="section-title">
                    <span>01</span>
                    Basic Information
                </div>

            <div className="form-group">
                <p>Choose type of Club</p>
                <div className="club-options">
                    <input type="radio" id="sports" name="councilCategory" value="Sports"/>
                    <label for="sports">Sports</label>

                    <input type="radio" id="cultural" name="councilCategory" value="Cultural"/>
                    <label for="cultural">Cultural</label>

                    <input type="radio" id="technical" name="councilCategory" value="Technical"/>
                    <label for="technical">Technical</label>
                </div>
            </div>
        

                    <div className="section-title">
                    <span>02</span>
                    Name of Club
                </div>

            <div className="form-group">
                    <label for="session">NAME OF CLUB</label>
                    <input type="text" id="session" name="councilName"  placeholder="enter club name " required />
                </div>

                <div className="section-title">
                    <span>03</span>
                    Club Email
                </div>

                <div className="form-group">
                    <label for="eventlink">Create Email for Club</label>
                    <input type="email" id="eventlink" name="councilEmail" placeholder="xyz@gmail.com" />
                </div>

                <div className="section-title">
                    <span>04</span>
                    Password
                </div>

            <label for="pwd">Password</label>
            <input type="password" id="pwd" value="private info" name="conformPassword" required />
            <br/><br/> 

            <div className="section-title">
                    <span>04</span>
                    Conform Password
                </div>

            <label for="pwd"> Conform Password</label>
            <input type="password" id="pwd" value="private info" name="councilPassword" required />
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