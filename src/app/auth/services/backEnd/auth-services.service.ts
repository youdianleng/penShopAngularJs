import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AuthServicesService {  
    async login(email:string, password: string){
      
    }
}
