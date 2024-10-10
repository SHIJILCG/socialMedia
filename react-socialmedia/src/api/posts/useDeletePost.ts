import {useMutation } from 'react-query'
import { axiosInstance } from '../axiosInstance'
import {PostDetailsType } from '../../Type/type'

export default function useDeletePost() {
      return useMutation(
         async (Post:PostDetailsType)=> await axiosInstance.delete(`/posts/${Post.id}`),{
             onSuccess:()=>{
                 console.log("succesfuly deleted post")
             },
             onError:()=>{
                 console.log("Error while deleting")
             }
         }
      )
}
