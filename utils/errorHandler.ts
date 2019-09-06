import $t from '@/utils/$t'

interface IError {
  code?: string | number
  msg?: string
  fallback?: string
}

export default (
  toast: any,
  { code = '', msg = '', fallback = $t('errorcode.fallback') }: IError
) => {
  if (code) {
    if ($t(`errorcode.${code}`) !== `errorcode.${code}`) {
      toast($t(`errorcode.${code}`))
    } else {
      msg ? toast(msg) : toast(fallback)
    }
  } else {
    toast.fail(fallback)
  }
}
