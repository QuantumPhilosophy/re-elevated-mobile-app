import axios from 'axios'

// const api_url = 'http://localhost:3030'
const api_url = 'https://elevated-shadow-api.herokuapp.com'

export default {
  loginUser: (userObj) => {
    console.log('loginUser', userObj)
    return axios.post(`${api_url}/auth/login`, userObj)
  },

  logoutUser: () => {
    return axios.post(`${api_url}/auth/logout`)
  },

  getUser: (id) => {
    return axios.get(`${api_url}/auth/user:id`)
  },

  createNewUser: (userObj) => {
    console.log('createNewUser() triggered', userObj)
    return axios.post(`${api_url}/auth/signup`, {
      user_name: userObj.user_name,
      user_email: userObj.user_email,
      user_img: userObj.user_img,
      user_password: userObj.user_password,
      dob: userObj.dob
    })
  },

  getStrains: () => {
    console.log("getStrains triggered")
    return axios.get(`${api_url}/strains`)
  },

  getLabels: () => {
    console.log("getLabels triggered")
    return axios.get(`${api_url}/labels`)
  }

  // saveBook: (bookObj, userId) => {
  //   return axios.post(`${api_url}/api/book/` + userId, bookObj)
  // },
  // getUserBooks: (userId) => {
  //   return axios.get(`${api_url}/api/book/` + userId)
  // },
  // getBooks: () => {
  //   return axios.get(`${api_url}/api/book`)
  // },

  // uploadPhoto: (data) => {
  //   const image = { image: data }
  //   return axios.post(`http://localhost:3001/upload`, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     data
  //   })
  // }
}
