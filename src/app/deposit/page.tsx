import AuthGuard from '@/components/AuthGuard';
import Deposit from '@/components/Deposit';

export default function DepositPage() {

    return (
        // <AuthGuard>
            <Deposit pageTitle="Deposit" />
        // {/* </AuthGuard> */}
    )
}