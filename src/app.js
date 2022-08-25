
let express =require('express')
let bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/status',function(req,res){
    res.send('Hello nodejs server bb')
})
//หาร 2

app.put('/app1',function (req,res){
    let input = JSON.stringify(req.body.inputX)%2;
    let x = JSON.stringify(req.body.inputX);
   
    res.send( x +'%'+ '= ' + input)
})

app.put('/app2',function(req,res){
    let x = JSON.stringify(req.body.inputX);
    let y = JSON.stringify(req.body.inputY);
    let num=math.gcd(x,y);
    res.send(num)
})
let port =  8081

app.listen(port,function(){
    console.log('server running on '+port)
})
