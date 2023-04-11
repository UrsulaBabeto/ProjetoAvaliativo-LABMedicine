const updatePatient = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = updatePatient;

/* Request: 
HTTP PUT no path /api/pacientes/{identificador}
No corpo da request, informar objeto json com os campos.
Os campos validados como sendo obrigatórios devem possuir os valores possíveis para estes campos.
Response:
HTTP Status Code 200 (OK) em caso de sucesso, constando no corpo da resposta os dados atualizados do paciente.
HTTP Status Code 400 (Bad Request) em caso de requisição com dados inválidos, informando mensagem de erro explicativa no corpo do response.
HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado, retornando mensagem de erro explicativa no corpo do response. 
 */
