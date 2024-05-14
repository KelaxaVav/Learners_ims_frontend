import Swal from 'sweetalert2'

export default async function ConfirmAlertDialog({ confirmButtonText, message }) {
    let confirm = false;

    try {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmButtonText,
        })
        confirm = result.isConfirmed;
    } catch (error) { /* empty */ }

    return confirm;
}