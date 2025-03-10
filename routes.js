const express = require('express')
const { createCvController, getCvController, getAllCvController, updateCvController } = require('./controller/cvController')


const routes = new express.Router()

routes.post("/addcv",createCvController)
routes.get("/getcv/:cvId",getCvController)
routes.get("/getallcv",getAllCvController)
routes.post("/updatecv",updateCvController)


module.exports = routes