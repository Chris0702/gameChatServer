exports.on = function(app) {
    let preRestApi = '/user';
    let response={
        'resStatus':0,
        'resString':''
    }
    app.post(preRestApi + '/login', function(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        console.log("第一個參數 username");
        console.log(username);
        console.log("第二個參數 password");
        console.log(password);
        res.send(JSON.stringify(response));
    });


}
