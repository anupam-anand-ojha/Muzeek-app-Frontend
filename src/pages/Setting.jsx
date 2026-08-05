import React from 'react'
import { useNavigate } from 'react-router-dom'

function Setting() {

  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: "" }}>
      <div className='lg:px-20 my-20'>
      <h1 className="text-3xl font-bold mb-6 ">
        Settings
      </h1>

      <div className="space-y-4">

        <button  onClick={()=> navigate("/login")} className=" btn btn-secondary mt-4 ">
          LOGIN
        </button>

        <button onClick={() => navigate("/signUp")} className="btn btn-secondary mt-4">
          SIGN UP
        </button>


        <button className="btn btn-warning ">
          Logout
        </button>

      </div>
      </div>

    </div>
  )
}

export default Setting