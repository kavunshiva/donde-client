const baseUrl = `http://localhost:3000/api/v1`

const headers = {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
}

export class AuthAdapter {
  static login(params){
    return fetch(`${baseUrl}/auth`, {
      method: 'post',
      headers: headers,
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: headers
    }).then(res => res.json())
  }
}

export class DevicesAdapter {
  static getDevicesByUser(user){
    return fetch(`${baseUrl}/users/${user.id}/devices`, {
      headers: headers
    }).then(res => res.json())
  }

  static create(device){
    return fetch(`${baseUrl}/devices`,{
      method: 'post',
      headers: headers,
      body: JSON.stringify(device)
    })
      .then(res => res.json())
  }

  static update(device){
    return fetch(`${baseUrl}/devices/${device.id}`,{
      method: 'patch',
      headers: headers,
      body: JSON.stringify(device)
    })
      .then(res => res.json())
  }

  static destroy(device){
    return fetch(`${baseUrl}/devices/${device.id}`,{
      method: 'delete',
      headers: headers,
      body: JSON.stringify(device)
    })
      .then(res => res.json())
  }
}
