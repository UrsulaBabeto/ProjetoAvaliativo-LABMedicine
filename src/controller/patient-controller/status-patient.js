const statusPatient = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = statusPatient;
/* 
HTTP PUT no path /api/pacientes/{identificador}/status
No corpo da request, informar objeto json com os campos.
O campo deve ser validado como sendo obrigatório e pertencente aos valores possíveis para este campo.
Response:
HTTP Status Code 200 (OK) em caso de sucesso, constando no corpo da resposta os dados atualizados do paciente.
HTTP Status Code 400 (Bad Request) em caso de requisição com dados inválidos, informando mensagem de erro explicativa no corpo do response.
HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado, retornando mensagem de erro explicativa no corpo do response. 
 */