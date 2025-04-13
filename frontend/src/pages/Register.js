import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3002/api/user/register', {
                name,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMsg('Registration successful! You can now login.');
            setName('');
            setEmail('');
            setPassword('');
        } catch (err) {
            setMsg('Registration failed: ' + (err.response?.data?.message || 'Something went wrong'));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4">
                <h2 className="text-xl font-semibold text-center">Register</h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)} required
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required
                />

                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Register
                </button>

                <p className="text-center text-sm text-gray-600">{msg}</p>
            </form>
        </div>
    );
};

export default Register;
