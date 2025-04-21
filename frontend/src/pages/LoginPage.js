import React, {useState} from 'react';
import UserService from "../services/UserService";
import {useNavigate} from "react-router-dom";
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/outline';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [msg, setMsg] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login event");
        try {
            const token = await UserService.loginUser(email, password);
            if (token) {
                setSuccessMessage("Login Success! Redirecting...");
                setMsg(null);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        } catch (err) {
            setMsg(err.message || "Login failed");
            setSuccessMessage(null);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-orange-100">
            <div
                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-orange-400 transition-all duration-300 hover:shadow-orange-400/20">
                <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-white/50 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 placeholder-gray-500 text-gray-800"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full p-3 bg-white/50 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 placeholder-gray-500 text-gray-800"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-orange-400 hover:text-orange-300"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="h-5 w-5"/>
                            ) : (
                                <EyeIcon className="h-5 w-5"/>
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white p-3 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Sign In
                    </button>
                    {msg && (
                        <p className="text-center text-sm text-red-400 mt-3 animate-pulse">{msg}</p>
                    )}
                </form>
                {successMessage && (
                    <p className="text-center text-sm text-green-400 mt-4 font-medium animate-fade-in">{successMessage}</p>
                )}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <a href="/register" className="text-orange-400 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;