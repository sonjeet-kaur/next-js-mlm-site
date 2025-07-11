import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import '@/Assets/Style/style.scss';
import AuthGuard from '@/components/AuthGuard';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return
    <AuthGuard>
        {children}
    </AuthGuard>
}
