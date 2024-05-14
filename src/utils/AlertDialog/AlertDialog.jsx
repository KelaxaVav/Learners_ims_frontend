import React from 'react'
import Swal from 'sweetalert2';

export default async function AlertDialog({ title, message, icon }) {
    return await Swal.fire({
        title: title,
        text: message,
        icon: icon,
        timer: 1200,
    });
}
