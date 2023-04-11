const listPatient = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = listPatient;

/* HTTP GET no path /api/pacientes
Não é necessário request body
Deve prever um query param opcional para filtrar o resultado da consulta pelo status de atendimento.
query param = “status”  (não obrigatório ser informado na request)
Valores possíveis para serem informados na requisição = AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO e NAO_ATENDIDO
Exemplo de path com o query param informado:
/api/pacientes?status=ATENDIDO
Caso não seja informado o parâmetro de pesquisa, deve retornar todos os registros da base de dados.
Response: 
HTTP Status Code 200 (OK), com a lista de pacientes.
 */