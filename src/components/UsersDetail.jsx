import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser , deleteUser, deleteAllUsers} from '../store/slices/UserSlice'
import { useSelector } from 'react-redux'

const UsersDetail = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload)=>{
    console.log(44,payload)
    dispatch(addUser(payload))

  }

  const data = useSelector((state) => {
    return state.users
  })

  const deleteuser = (id) => {
    console.log(9999999,id)
     dispatch(deleteUser(id))

  }

  const deletealluser = ()=>{
    dispatch(deleteAllUsers())

  }

  console.log('data',data)

  return (
    <div className='container'>
      <h3 className="text-center mt-5">Users Details</h3>
      <div className="container">
        <button className='btn btn-success ml-3' onClick={()=>addNewUser(fakeUserData())}> Add User</button>
        &nbsp; &nbsp; &nbsp;
        <button className='btn btn-danger' onClick={deletealluser}> Delete All Users</button>

      </div>
      <table>
        <tbody>
        {data.map((val,index) =>(
          <tr key={index}>
            <td>{val}</td>
            <td><button onClick={()=>deleteuser(index)}> x </button></td>
          </tr>

        ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersDetail
