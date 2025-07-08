import AuthGuard from '@/components/AuthGuard';
import Report from '@/components/Report';

export default function ReportPage() {

    return (
        // <AuthGuard>
            <Report pageTitle="Report" />
        // {/* </AuthGuard> */}
    )
}