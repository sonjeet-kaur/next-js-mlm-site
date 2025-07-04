import AuthGuard from '@/components/AuthGuard';
import Investment from '@/components/Investment';

export default function DashboardPage() {

    return (
        // <AuthGuard>
        <Investment pageTitle="Activation" />
        // </AuthGuard>
    )
}