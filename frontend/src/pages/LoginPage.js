import React, {useState} from 'react';
import UserService from "../services/UserService";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login event");
        try {
            await UserService.loginUser(email, password);
            setMsg('Login successful!');
        } catch (err) {
            setMsg('Login failed: ' + err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4">
                <h2 className="text-xl font-semibold text-center">Login</h2>
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
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
                <p className="text-center text-sm text-gray-600">{msg}</p>
            </form>
        </div>
    );
};

export default LoginPage;
