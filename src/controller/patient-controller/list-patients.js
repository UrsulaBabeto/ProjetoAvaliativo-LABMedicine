const Patient = require("../../model/patient-model");

const listPatient = async (req, res) => {
  try {
  /*   const statusPatients = await Patient.findAll({
      where: {
        status: req.body.status,
      },
    }) */;
    const patients = await Patient.findAll()
    res.status(200).json(patients || statusPatients);
  } catch (error) {
    console.log(error);
  
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = listPatient;

