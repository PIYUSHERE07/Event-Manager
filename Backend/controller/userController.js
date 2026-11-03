exports.userGet = ()=>{
    res.send("Hello...")
}

exports.userPost =async ()=>{
    res.send("Hello...")
    await req.session.destory(()=>{
        res.json({
            success: false
        })
    })
}