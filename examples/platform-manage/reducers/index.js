/**
 * Created by jiangyu2016 on 16/10/15.
 */



export function app(state = {}, action) {
  return state
}


export function fetchDoctorList(state = [], action) {

  if (action.type == 'fetchDoctorList') {

    let doctorList = [{
      id: 1,
      phone: 1234567890,
      doctor_Name: 'abc',
      hospital_Id: 'abc',
      department_Id: 'ddd',
      title_Id: 'sdf',
      doctor_Photo: '',
      doctor_Practicing_Photo: '',
      doctor_Practicing_Number: '3308022239248238',
      doctor_Major: 'english',
      doctor_Is_Checked: '0',
      doctor_Info_Remark: 'remark',
      doctor_Info_Creat_Time: '2016-10-10'
    }]
    return doctorList
  }

  return state
}
