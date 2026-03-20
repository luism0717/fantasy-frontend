import { useState } from 'react'
import client from '../api/client'

function Register() {
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [email, setEmail] = useState ('')
    const [error, setError] = useState ('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await client.post('/auth/register', { username, password, email })
            window.location.href = '/login'
        } catch (err) {
            setError('Invalid username, password, or email')
        }
    }

    return (
        <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-800 p-8 rounded-lg w-full max-w-md'>
                <h1 className='text-3x1 font-bold text-green-400 mb-2'>Fantasy Sports</h1>
                <p className='text-gray-400 mb-8'>Sign up to an account</p>

                {error && (
                    <div className='bg-red-900 text-red-300 p-3 rounded mb-4'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister}>
                    <div className='mb-4'>
                        <label className='block text-gray-400 mb-2'>Username</label>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full bg-gray-700 text-white p-3 rounded focus:outline-non focus:ring-2 focus:ring-green-400'
                            placeholder='Enter username'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-400 mb-2'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full bg-gray-700 text-white p-3 rounded focus:outline-non focus:ring-2 focus:ring-green-400'
                            placeholder='Enter password'
                        />
                    </div>

                    <div className='mb-8'>
                        <label className='block text-gray-400 mb-2'>Email</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full bg-gray-700 text-white p-3 rounded focus:outline-non focus:ring-2 focus:ring-green-400'
                            placeholder='Enter email'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-green-500 hover:bg-green-400 text-black font-bold rounded transition'
                    >
                        Sign Up
                    </button>
                </form>

                <p className='text-gray-400 mt-4 text-center'>
                    Not valid credentials?{' '}
                    <a href='/register' className='text-green-400 hover:underline'>Register</a>
                </p>
            </div>
        </div>
    )
}
export default Register