import express from 'express'
const app = express()
app.use(express.json());
const port = 3000
const users = [{
    name: "John",
    Kidneys: [{ healthy: true }, { healthy: false }, { healthy: true }]
}]

app.get('/', function (req, res) { //whenever using get , query parameter are used to take input from user
    const johnkidneys = users[0].Kidneys
    const numberoftotalkidneys = johnkidneys.length //number of total kidneys 
    let numberofhealthykidneys = 0
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberofhealthykidneys = numberofhealthykidneys + 1
        }
    }
    const numberofUnhealthykidneys = numberoftotalkidneys - numberofhealthykidneys;
    res.send(`The Total number of Kidneys ${users[0].name} have is ${numberoftotalkidneys} and Healthy Kidneys are ${numberofhealthykidneys} and Unhealthy Kidneys are ${numberofUnhealthykidneys}`)
})



app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({ healthy: isHealthy })//post let us to add data in db and there is no need to return anything
    res.send('Done!')
})




app.put('/', function (req, res) {
    for (let i = 0; i < users[0].Kidneys.length; i++) {
        users[0].Kidneys[i].healthy = true; //put helps to update any data 
    }
    res.send('Updated')
})





app.delete('/', function (req, res) { //delete helps to remove any data we want
    const newKidneys = []
    for (let i = 0; i < users[0].Kidneys.length; i++) {
        if (users[0].Kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }

    }
    users[0].Kidneys = newKidneys;
    res.send(`checkout new array${newKidneys}`)
})

app.listen(port);
