import { useState } from 'react'
import client from '../api/client'
import Navbar from '../components/Navbar'

function CreateLeague() {
    const [name, setName] = useState('')
    const [sport, setSport] = useState('')
    const [max_teams, setMaxTeams] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await client.post('/leagues/', { name, sport, max_teams })
            window.location.href = '/'
        } catch (err) {
            setError('Cannot create league')
        }
    }

return (
    <div className='bg-gray-900 min-h-screen text-white'>
        <Navbar />
        <div className='flex items-center justify-center p-8'>
            <div className='bg-gray-800 p-8 rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6'>Create a League</h2>
                {error && (
                    <div className='bg-red-900 text-red-300 p-3 rounded mb-4'>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-400 mb-2'>League Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full bg-gray-700 text-white p-3 rounded'
                        placeholder='Enter league name'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-400 mb-2'>Sport</label>
                    <input
                        type='text'
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                        className='w-full bg-gray-700 text-white p-3 rounded'
                        placeholder='nfl, nba, etc'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-400 mb-2'>Max Teams</label>
                    <input
                        type='number'
                        value={max_teams}
                        onChange={(e) => setMaxTeams(e.target.value)}
                        className='w-full bg-gray-700 text-white p-3 rounded'
                        placeholder='10'
                    />
                </div>
                    <button
                        type='submit'
                        className='w-full bg-green-500 hover:bg-green-400 text-black font-bold p-3 rounded transition mt-4'
                    >
                        Create League
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default CreateLeague