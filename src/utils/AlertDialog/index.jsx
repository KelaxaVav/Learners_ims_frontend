import AlertDialog from "./AlertDialog";

export const UpdateSuccessful = () => AlertDialog({ title: "Updated!", message: "Your data has been updated.", icon: "success" })
export const UpdateFailed = () => AlertDialog({ title: "Updated!", message: "Your data has not been updated.", icon: "error" })

export const CreateSuccessful = () => AlertDialog({ title: "Created!", message: "Your data has been created.", icon: "success" })
export const CreateFailed = () => AlertDialog({ title: "Created!", message: "Your data has not been created.", icon: "error" })

export const DeleteSuccessful = () => AlertDialog({ title: "Deleted!", message: "Your data has been deleted.", icon: "success" })
export const DeleteFailed = () => AlertDialog({ title: "Deleted!", message: "Your data has not been deleted.", icon: "error" })


export const ServerError = () => AlertDialog({ title: "Error!", message: "Internal server error.", icon: "error" })