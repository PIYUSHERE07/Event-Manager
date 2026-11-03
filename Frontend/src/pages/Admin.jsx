function Admin(){
    function getData(){
        const response = fetch("http://localhost:3000/admin/councilLogin",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                councilEmail:"sports@gmail.com",
                councilPassword:"sports123",
                conformPassword:"sports123",
                councilName: "piyush Malewar",
                councilCategory: "sports"
            })
        })
    }
    return (
        <>
        I am in the Admin
        <button onClick={getData}>check</button>
        </>
    )
}

export default Admin;