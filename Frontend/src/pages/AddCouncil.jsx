function AddCouncil(){
    
    function handelForm(event){
        event.preventDefault();
        console.log(event)
        const response = fetch("http://localhost:3000/admin/councilLogin",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                councilEmail:event.target.councilEmail.value,
                councilPassword:event.target.councilPassword.value,
                conformPassword:event.target.conformPassword.value,
                councilName: event.target.councilName.value,
                councilCategory: event.target.councilCategory.value
            })
        })
    }

    return(
    <>
        <div className="container">

            <div className="form-header">
                <h1>Club Registeration Form</h1>
            </div>

            <form onSubmit={handelForm}>
                <div className="form-group">
                    <label>Choose type of Club</label>
                    <div className="club-options">
                        <div className="option">
                            <input type="radio" id="sports" name="councilCategory" value="Sports"/>
                            <label htmlFor="sports"> Sports</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="cultural" name="councilCategory" value="Cultural"/>
                            <label htmlFor="cultural"> Cultural</label>                            
                        </div>
                        <div className="option">
                            <input type="radio" id="technical" name="councilCategory" value="Technical"/>
                            <label htmlFor="technical"> Technical</label>
                        </div>


                    </div>
                </div>
        
                <div className="councilName">
                    <label htmlFor="session">Name Of Club</label>
                    <input type="text" id="session" name="councilName"  placeholder="enter club name " required />
                </div>
                <div className="councilEmail">
                    <label htmlFor="eventlink">Council Email</label>
                    <input type="email" id="eventlink" name="councilEmail" placeholder="xyz@gmail.com" />
                </div>

                <div className="password">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" name="conformPassword" required />
                </div>
                <br/><br/> 

                <div className="section-title">
                    <label htmlFor="pwd"> Conform Password</label>
                    <input type="password" id="pwd" name="councilPassword" required />
                </div>
                <br/><br/> 
            
            

                <button type="submit">
                    SUBMIT EVENT DETAILS →
                </button>

            </form>

        </div>
    </>
)}

export default AddCouncil;