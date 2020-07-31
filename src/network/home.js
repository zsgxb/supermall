import {request} from './request.js'

export function getHomemultidata(){
    return request({
        url:'/home/multidata'
    })
}