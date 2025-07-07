import AuthGuard from '@/components/AuthGuard';
import Profile from '@/components/Profile';

export default function DashboardPage() {

    return (
        // <AuthGuard>
            <Profile pageTitle="Dashboard" />
        // </AuthGuard>
    )
}