module.exports.private = (req,res) => {
    res.status(200).json({success:true,person:req.person})
}