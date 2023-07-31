import axios from 'axios'
import React from 'react'
import Axios from './axios'
import Fetch from './fetch'

const Root = () => {
    axios.interceptors.request.use( request => {
        console.log(request, "request");
        request.headers.Authorization = "bear"
        return request
    } )
    axios.interceptors.response.use( response => {
        console.log(response, "response");
        return response
    } )
  return (
    <div>
        <Axios />
        <Fetch />
    </div>
  )
}

export default Root