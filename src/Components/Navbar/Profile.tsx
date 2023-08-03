import React from 'react'

interface Props {
  profileImage: string;
}

const Profile:React.FC<Props> = ({profileImage}:Props) => {
  return (
    <div className='w-fit h-fit flex justify-center items-center gap-3'>
      <h3 className='font-bold'>Dashford</h3>
      <p>User</p>
      <p>Admin</p>
      <div className='w-10 h-10 rounded-full' style={{background : `url("${profileImage}") no-repeat center center/cover`}}></div>
    </div>
  )
}

export default Profile
