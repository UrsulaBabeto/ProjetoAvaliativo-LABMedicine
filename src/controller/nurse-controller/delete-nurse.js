const deleteNurse = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Erro de Servidor '});
    }
}

module.exports = deleteNurse;