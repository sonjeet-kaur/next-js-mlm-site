'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { api_url } from '@/config/config';
import _fetch from '@/config/api';
import { useUser } from '@/app/context/UserContext';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { setUser, checked, setChecked } = useUser();

    useEffect(() => {
        // getUserLoginInfo();
    }, []);

    const getUserLoginInfo = async () => {
        let res = await _fetch(`${api_url}userVerify`, "GET", {}, {});
        if (res?.status == 'success') {
            setUser(res?.userData);
        } else {
            redirect('/login');
        }
    }

    return (
        <>
            <Header />
            {children}
        </>
    )
}
