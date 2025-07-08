import AuthGuard from '@/components/AuthGuard';
import Investment from '@/components/Investment';
import '@/Assets/Style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardPage() {

    return (
        // <AuthGuard>
            <Investment pageTitle="Activation" />
        // </AuthGuard>
    )
}