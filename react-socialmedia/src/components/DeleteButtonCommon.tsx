import useDeletePost from "../api/posts/useDeletePost"
import useDeleteUser from "../api/users/useDeleteUser"
import { PostDetailsType} from "../Type/type"

type DeleteButtonCommonPropsType={
    Post?:PostDetailsType
    user?:number
}
export const DeleteButtonCommon = ({Post,user}:DeleteButtonCommonPropsType) => {
    const {mutate:mutePost}=useDeletePost()
    const {mutate:muteUser}=useDeleteUser()
    const handleDeletion=()=>{
          if(Post){
               mutePost(Post)
          }
          if(user){
            muteUser(user)
          }
         setTimeout(() => {
            window.location.reload()
         }, 300);
    }
  return (
    <button className='text-[20px]' onClick={handleDeletion}>🗑</button>
  )
}
