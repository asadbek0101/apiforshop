import express from "express"
import {v4} from "uuid";
const router = express.Router();
const PRODUCTS = []
const USERS = [
    {
        id:1,
        username:"Asadbek",
        email:"asad@gmail.com",
        password:"asadbek2001!",
        phone:996906901,
        role:"admin",
        image:"d"
    }
]
var KORZINKA = []
var ORDER = []
var PROFILE = {}
const CURIER = []
//PRODUCTS

router.get('/products', (req, res)=>{
    res.send(PRODUCTS)
})

router.post('/products/category', (req, res)=>{
    const newCategory = {...req.body, id:v4()}
    PRODUCTS.push(newCategory)
    res.send(newCategory)
})

router.post('/products', (req, res)=>{
    const newProduct = req.body
    PRODUCTS.map((e)=>{
        if(e.category == newProduct.category){
            e.data.push({...newProduct.data, id:v4()})
        }
    })
    res.send(newProduct)
})

//USERS

router.get('/users',(req, res)=>{
    res.send(USERS)
})

router.post('/users/register',(req, res)=>{
    const user = {...req.body,id:v4()}
    let need;
    USERS.map(e=>{
        if(e.email != user.email){
            USERS.push(user)
            PROFILE = user
            return need = user
        }else{
            return need = "ERROR"
        }
    })
    res.send(need)
})

router.post('/users/login',(req, res)=>{
    const user = req.body
    console.log(user)
    let need;
    USERS.map(e=> {
        if (e.username == user.username && e.password == user.password) {
            PROFILE = e
            return need =  e.role
            console.log(e.role)
        } else {
           return need = "NO USER"
        }})
    res.send(need)
})

router.put('/users/:id', (req,res)=>{
    const index = USERS.findIndex(e=>e.id===req.params.id)
    USERS[index] = req.body
    res.send(req.body)
})

router.delete('/users/:id',(req, res)=>{
    const index = USERS.findIndex(e=>e.id === req.params.id)
    USERS.splice(index, 1)
    res.send(req.params.id)
})

//KORZINKA

router.get('/korzinka',(req,res)=>{
    res.send(KORZINKA)
})

router.post('/korzinka', (req, res)=>{
    const newProduct = req.body
    KORZINKA.push(newProduct)
    res.send(newProduct)
})

router.delete('/korzinka/:id',(req,res)=>{
    const index = KORZINKA.findIndex(e=>e.id == req.params.id)
    KORZINKA.splice(index,  1)
    console.log(req.params.id)
    res.send(req.params.id)
})
router.get('/korzinka/clear', (req, res)=>{
    const array = []
    KORZINKA = array
    res.send(KORZINKA)
})


//ORDER

router.get('/order', (req, res)=>{
    res.send(ORDER)
})

router.post('/order', (req, res)=>{
    const newProduct = req.body
    ORDER.push(newProduct)
    res.send(newProduct)
})

router.delete('/order/:id', (req, res)=>{
    const index = ORDER.findIndex(e=>e.id === req.params.id)
    ORDER.splice(index, 1);
    res.send(req.params.id)
})

//CURIER

router.get('/curier',(req, res)=>{
    res.send(CURIER)
})

router.post('/curier',(req, res)=>{
    CURIER.push(req.body)
    res.send(req.body)
})

router.delete('/curier/:id',(req, res)=>{
    const index = CURIER.findIndex(e=>e.id === req.params.id)
    CURIER.splice(index, 1)
    res.send(req.params.id)
})

//PROFILE

router.get('/profile',(req, res)=>{
    res.send(PROFILE)
})

router.post('/profile', (req, res)=>{
    PROFILE = req.body
    const index = USERS.findIndex(e=>e.id === req.body.id)
    USERS[index] = req.body
    res.send(PROFILE)
})

export  default  router