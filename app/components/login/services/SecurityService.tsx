import { sendLogin } from '@/constants/Paths'
import axios from 'axios'

export default class SecurityService {

    async sendLogin(data: any) {
        return await axios.post(sendLogin, data)
    }


}