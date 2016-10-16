/**
 * Created by jiangyu2016 on 16/10/16.
 */


export function fetchDoctorList(option) {
  return dispatch=> {
    fetch('/').then(res=> {
      dispatch({
        type: 'fetchDoctorList'
      })
    })
  }
}
