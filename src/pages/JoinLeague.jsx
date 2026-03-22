import { useState } from "react";
import client  from "../api/client";
import Navbar from "../components/Navbar";

function JoinLeague() {
    const [team_name, setTeamName] = useState('')
    const [invite_code, setInviteCode] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // First find the league by invite code
            const leagues = await client.get(`/leagues/`)
            const league = leagues.data.find(l => l.invite_code === invite_code)

            if (!league) {
                setError('Invalid invite code')
                return
            }

            // The join it using the league id we found
            await client.post(`/leagues/${league.id}/join`, { name: team_name, invite_code})
            window.location.href = '/'
        } catch (err) {
            console.log(err)
            setError('Cannot join league')
        }
    }
    
    return (
    <div className='bg-gray-900 min-h-screen text-white'>
        <Navbar />
        <div className='flex items-center justify-center p-8'>
            <div className='bg-gray-800 p-8 rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6'>Join a League</h2>
                {error && (
                    <div className='bg-red-900 text-red-300 p-3 rounded mb-4'>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-400 mb-2'>Team Name</label>
                    <input
                        type='text'
                        value={team_name}
                        onChange={(e) => setTeamName(e.target.value)}
                        className='w-full bg-gray-700 text-white p-3 rounded'
                        placeholder='Enter Team Name'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-400 mb-2'>Invite Code</label>
                    <input
                        type='text'
                        value={invite_code}
                        onChange={(e) => setInviteCode(e.target.value)}
                        className='w-full bg-gray-700 text-white p-3 rounded'
                        placeholder='Invite Code'
                    />
                </div>
                    <button
                        type='submit'
                        className='w-full bg-green-500 hover:bg-green-400 text-black font-bold p-3 rounded transition mt-4'
                    >
                        Join League
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}
export default JoinLeague