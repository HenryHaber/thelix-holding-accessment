import { toast } from 'react-hot-toast'

export const errorToast = (msg) => {
  toast.error(msg)
}
export const successToast = (msg) => {
  toast.success(msg)
}
