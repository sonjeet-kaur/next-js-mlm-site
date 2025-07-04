import { toast } from 'react-toastify';

const toasted = {
    success: function (message) {
        toast.success(message, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    },
    error: function (message) {
        toast.error(message, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }
}
export default toasted;