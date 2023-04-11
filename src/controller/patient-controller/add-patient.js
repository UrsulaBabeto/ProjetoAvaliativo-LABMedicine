const addPatient = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = addPatient;

/* No corpo da request, informar objeto json com os campos
Todos os campos obrigatórios devem ser validados. O CPF deve ser único por paciente. Validar se o CPF informado já foi cadastrado no sistema.
Response:
HTTP Status Code 201 (CREATED) em caso de sucesso, constando no corpo da resposta o código atribuído ao novo paciente cadastrado, além dos demais campos. No response, retornar os campos adicionais “identificador” e “atendimentos”, usando obrigatoriamente estes nomes para os campos.
HTTP Status Code 400 (Bad Request) em caso de requisição com dados inválidos, informando mensagem de erro explicativa no corpo do response. 
HTTP Status Code 409 (Conflict) em caso de CPF já cadastrado, informando mensagem de erro explicativa no corpo do response. 
 */