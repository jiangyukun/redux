/**
 * Created by jiangyu2016 on 16/10/15.
 */



export function app(state = {}, action) {
  return state
}


export function doctorListInfo(state = {total: 0, doctorList: []}, action) {

  if (action.type == 'fetchDoctorList') {
    return action.doctorListInfo
  }

  return state
}
