import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from '../../../../config/model/local/User.entity';

@Injectable()
export class AuthServicesService {  
  constructor(private dataSource: DataSource) {}
    async login(email:string, password: string){
      const userRepository = this.dataSource.getRepository(User);
      return await userRepository.find();  // Query all users
    }
}
