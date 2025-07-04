'use client';

import '@/Assets/Style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import Header from '@/components/Header';

export default function Dashboard(pageTitle: any) {

    console.log('pageTitlepageTitle', pageTitle);

    return (
    <section className='main'>
        <Header />
        <h6>main</h6>
    </section>
    )
}
