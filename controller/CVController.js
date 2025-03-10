const CvsModel = require("../model/cvsmodel")

exports.createCvController = async(req,res)=>{
 try {
  const {name, email, phone, summary, experience, education} = req.body
  if (!name || !email || !phone || !summary || !experience ||!education){
    return res.status(400).json({message: "not complete body"})
  }
  const experienceJSON = JSON.stringify(experience);
  const educationJSON = JSON.stringify(education);
  const CvId = await CvsModel.createUser(name, email, phone, summary, experienceJSON, educationJSON)
  res.status(201).json({CvId})
 } catch (error) {
  res.status(405).json(error)
 }
}
exports.getCvController = async(req,res)=>{
  try {
    const {cvId} = req.params
    console.log(req.params);
    
    const cv = await CvsModel.getUser(cvId)
    // console.log(cv);
    res.status(200).json(cv)
  } catch (error) {
    res.status(405).json(error)
  }
}
exports.getAllCvController = async(req,res)=>{
  try {
    const cv = await CvsModel.getAllUsers()
    // console.log(cv);
    res.status(200).json({cvs:cv})
  } catch (error) {
    res.status(405).json(error)
  }
}
exports.updateCvController = async(req,res)=>{
  try {
   const {id,name, email, phone, summary, experience, education} = req.body
   if (!id || !name || !email || !phone || !summary || !experience ||!education){
     return res.status(400).json({message: "not complete body"})
   }
   const experienceJSON = JSON.stringify(experience);
   const educationJSON = JSON.stringify(education);
   await CvsModel.updateUser(id,name, email, phone, summary, experienceJSON, educationJSON)
   res.status(201).json({"messege":"updated successfully"})
  } catch (error) {
   res.status(405).json(error)
  }
 }