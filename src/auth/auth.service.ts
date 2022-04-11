import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    login(){
        console.log('laksdlkasd');
        
    }

    async validateUser(email:string, password:string){
        const user = await this.userService.findByEmail(email);

        if(user){
            const isPasswordValue = await bcrypt.compare(password, user.password)

            if(isPasswordValue){
                return {
                    ...user,
                    password: undefined
                }
            }
        }

        throw new Error("Email ou senha inválida!")

    }
}
