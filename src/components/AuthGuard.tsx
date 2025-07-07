'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { api_url } from '@/config/config';
import _fetch from '@/config/api';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        getUserLoginInfo();
        // const token = localStorage.getItem('accessToken');
        // console.log('ececdcedce', token);

        // if (!token) {
        //     router.replace('/login');
        // } else {
        //     setChecked(true);
        // }
    }, []);

    const getUserLoginInfo = async () => {
        let res: any = await _fetch(`${api_url}userVerify`, "GET", {}, {});
        if (res?.status == 'success') {
            setChecked(true);
        } else {
            redirect('/login');
        }
    }

    if (!checked) return null;

    return (
        <>
            <Header />
            {children}
        </>
    )
}
