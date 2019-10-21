import http from '~/services/http'
import { IUser } from '~/services/interface'

export const getUser = (): Promise<IUser> => http.get('/user')
