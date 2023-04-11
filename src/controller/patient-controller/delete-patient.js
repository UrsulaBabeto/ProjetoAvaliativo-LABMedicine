const Patient = require("../../model/patient-model");

const deletePatient = async (req, res) => {
  try {
    await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!req.params.id)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = deletePatient;

/* 
Request: 
HTTP DELETE no path /api/pacientes/{identificador}
Não é necessário request body.
Response:
HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.
HTTP Status Code 404 (Not Found) em caso de requisição com código não existente na base de dados. 
 */
