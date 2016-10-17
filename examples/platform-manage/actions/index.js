/**
 * Created by jiangyu2016 on 16/10/16.
 */
export function fetchDoctorList(option) {
  let {start, length} = option
  return dispatch=> {
    fetch('/fetchDoctorList/' + start + '/' + length).then(response=>response.json()).then((doctorListInfo)=> {
      dispatch({
        type: 'fetchDoctorList', doctorListInfo
      })
    })
  }
}
