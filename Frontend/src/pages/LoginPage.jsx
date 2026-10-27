function LoginPage({formHandler}){
    return(
        <div className="box">
            <div className="login-form">
                <div className="userform inner-form">
                    <h2>Login as User</h2>
                    <form
                        // action="/" 
                        // method="post"
                        onSubmit={(event)=>{
                            event.preventDefault();
                            const data={
                                firstname : event.target.firstname.value,
                                lastname : event.target.lastname.value,
                                email : event.target.user_email.value
                            }
                            formHandler(data);
                        }}
                        >
                        <div className="firstname">
                            <label htmlFor="firstname">Firstname</label><br />
                            <input type="text" placeholder="Enter firstname" name="firstname"/>
                        </div>
                        <div className="lastname">
                            <label htmlFor="lastname">Lastname</label><br />
                            <input type="text" placeholder="Enter lastname" name="lastname"/>
                        </div>
                        <div className="user_email">
                            <label htmlFor="user_email">Email</label><br />
                            <input type="email" placeholder="Enter you email" name="user_email"/>
                        </div>
                        <div className="check">
                            <input type="checkbox" name="termAndCondition" id="tandc" /><label htmlFor="tandc"><a href="#"> Terms and Conditions</a></label>
                        </div>
                        <div className="user-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="hostform inner-form">
                    <h2>Login as Club</h2>
                    <form
                        // action="/" 
                        // method="post"
                        onSubmit={(event)=>{
                            event.preventDefault();
                            const data={
                                firstname : event.target.clubname.value,
                                email : event.target.club_email.value,
                                password : event.target.club_pass.value
                            }
                            formHandler(data)
                        }}
                        >
                        <div className="clubname">
                            <label htmlFor="clubname">Clubname</label><br />
                            <input type="text" placeholder="Enter club name" name="clubname"/>
                        </div>
                        <div className="club_email">
                            <label htmlFor="club_email">Club Email-Id</label><br />
                            <input type="email" placeholder="Enter club email" name="club_email"/>
                        </div>
                        <div className="club_pass">
                            <label htmlFor="club_pass">Password</label><br />
                            <input type="password" placeholder="Enter club-pass" name="club_pass"/>
                        </div>
                        <div className="check">
                            <input type="checkbox" name="termAndCondition" id="tandc" /><label htmlFor="tandc"><a href="#"> Terms and Conditions</a></label>
                        </div>
                        <div className="club-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;