import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    let {user,name,age,password} = useContext(UserContext)
    console.log(user)
    if (!user||!user.age||!user.password||!user.name) {
        return (
            <div className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h1>
                    <p className="text-lg text-gray-900">Please fill in all fields.</p>
                </div>
            </div>
        )
    }
    return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h1>
        <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Name</p>
                <p className="text-lg text-gray-900">{user.name}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Age</p>
                <p className="text-lg text-gray-900">{user.age}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Password</p>
                <p className="text-lg text-gray-900">{'•'.repeat(user.password?.length || 0)}</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Profile
