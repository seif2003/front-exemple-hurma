"use client"
import { BottomGradient, LoginForm } from '@/components/loginform';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const LoginPage = () => {
    const [firstName, setFirstName] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFirstName(window.localStorage.getItem('first_name'));
            setToken(window.localStorage.getItem('access_token'));
        }
    }, []);

    function logout() {
        axios.post('http://127.0.0.1:8000/users/logout/', {
            token,
        })
        window.localStorage.clear();
        window.location.href = '/auth/login';
    }
    
    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        if (params) {
            const token = params.get('token');
            console.log(token);
            if (token) {
                window.localStorage.setItem('access_token', token);
                axios.get('http://127.0.0.1:8000/users/getme/', {
                    headers: { "AUTHORIZATION": `${token}` }
                }).then(response => {
                    console.log(response.data);
                    window.localStorage.setItem('first_name', response.data.users.first_name);
                    window.localStorage.setItem('email', response.data.users.email);
                    window.localStorage.setItem('role', response.data.users.role);
                    window.localStorage.setItem('username', response.data.users.username);
                    params.delete('token');
                    setFirstName(response.data.users.first_name);
                })
            }
        }
    }, []);
    

    if ( token ) {
        return <div className='w-[100vw] h-[100vh] items-center justify-center flex flex-col gap-12'>
            <h1 className='text-[40px]'>Welcome {firstName} </h1>
            <button 
                className='w-[200px] bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]' 
                onClick={logout}
            >
                Logout
                <BottomGradient />
            </button>
        </div>;
    } else {
        return <div className='flex flex-col justify-center items-center h-[100vh]'>
            <div className='border-[2px] rounded-sm p-6 bg-slate-300'>
                <img src="/exemple.png" />
                <h1 className='text-[30px]'>Redirect to front end with token </h1>
            </div>
            <LoginForm />;
        </div>
    }
};

export default LoginPage;