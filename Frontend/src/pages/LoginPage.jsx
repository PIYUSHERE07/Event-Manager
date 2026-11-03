
import '../../public/LoginPage.css';
function LoginPage({formHandler}){
    
    return(
       <>
        <div className="box">
            <div className="login-form">
                <div>
                    <h1>Login</h1>
                </div>
                <div className="form">
                    
                  <div className="clubform inner-form">
                    <h2>Head Login</h2>
                    <form
                        // action="/" 
                        // method="post"
                        onSubmit={(event)=>{
                            event.preventDefault();
                            const data={
                                
                                email : event.target.elements.id.value,
                                password : event.target.elements.pass.value
                            }
                            formHandler(data)
                        }}
                        >
                        {/* <div className="clubname">
                            <label htmlFor="clubname">Clubname</label><br />
                            <input type="text" placeholder="Enter club name" name="clubname" required="required"/>
                        </div> */}
                        <div className="id">
                            <label htmlFor="id">Id</label><br />
                            <input type="email" placeholder="Enter your id" name="id" required="required"/>
                        </div>
                        <div className="pass">
                            <label htmlFor="pass">Password</label><br />
                            <input type="password" placeholder="Enter your password" name="pass" required="required"/>
                        </div>
                        {/* <div className="check">
                            <input type="checkbox" name="termAndCondition" id="tandc"  required="required"/><label htmlFor="tandc"><a href="#"> Terms and Conditions</a></label>
                        </div> */}
                        <div className="club-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
            
        </div>
        
       </>
    )
}
export default LoginPage;