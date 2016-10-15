/**
 * Created by jiangyu2016 on 16/10/15.
 */

import React, {Component} from 'react'

import DoctorAuditing from './pages/DoctorAuditing'

export default class AppContent extends Component  {
  render() {
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
      doctor_Info_Remark:'remark',
      doctor_Info_Creat_Time: '2016-10-10'
    }]

    return (
      <div className="app-content">
        <div ui-butterbar></div>
        <a href className="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside"></a>
        <div className="app-content-body fade-in-up">
          <DoctorAuditing doctorList={doctorList}/>
        </div>
      </div>
    )
  }
}
