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
    const updatedHeaders = headers
    if(!headers.Authorization && user.jwt){
      updatedHeaders.Authorization = user.jwt
    }
    return fetch(`${baseUrl}/users/${user.id}/devices`, {
      headers: updatedHeaders
    }).then(res => res.json())
  }

  static getPositions(device){
    return fetch(`${baseUrl}/devices/${device.id}/positions`, {
      headers: headers
    }).then(res => res.json())
  }

  static create(device){
    return fetch(`${baseUrl}/devices`,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify({device: device})
    })
      .then(res => res.json())
  }

  static update(device){
    return fetch(`${baseUrl}/devices/${device.id}`,{
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({device: device})
    })
      .then(res => res.json())
  }

  static destroy(device){
    return fetch(`${baseUrl}/devices/${device.id}`,{
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({device: device})
    })
      .then(res => res.json())
  }
}
