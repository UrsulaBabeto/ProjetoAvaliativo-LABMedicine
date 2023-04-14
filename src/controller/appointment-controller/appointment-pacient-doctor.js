const { UPDATE } = require("sequelize/types/query-types");
const Appointment = require("../../model/appointment-model");
const Doctor = require("../../model/doctor-model");
const Patient = require("../../model/patient-model");


const appointment = async (req, res)=>{
    try {
        const attendancePatient = await Patient.findOne(total_attendance)
        const appointmentPatient = await Patient.update(
            attendancePatient = total_attendance +1  
        )
           
        const attendanceDoctor = await Doctor.findOne(total_attendance)
        const appointmentDoctor = await Doctor.update(
            attendanceDoctor = total_attendance +1  
        )
        const appointment = Appointment.save()
        res.status(200).json(appointment)
    } catch (error) {
        return res.status(500).json({ message: "Erro de Servidor " });
    }
}
/* indone na tabela e atualizar o contador
atendimento.create
await patient.findoOne 
update.contador = patient.contador+1 */

module.exports = appointment;