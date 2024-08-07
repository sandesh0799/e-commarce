
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            localStorage.setItem('auth', 'true');
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="data:image/png;base64,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" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-secondary">Or</span>
                    </div>
                    <button className='w-full py-2 text-secondary bg-background border border-secondary rounded-md hover:bg-secondary/80 focus:outline-none focus:ring focus:ring-secondary'>
                    </button>
                </form>
                <div>
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login with Google</button>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    No Account?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
