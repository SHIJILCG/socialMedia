export type UserDetailsType={
     id:number
     name:string
     email:string
     gender:"female" | "male"
     status:"active" | "inactive"
}

export type PostDetailsType ={
     id:number
     user_id:number
     title:string
     body:string
}
export type CommentsDetailsType ={
      id:number
      post_id:number
      name:string
      email:string
      body:string
}