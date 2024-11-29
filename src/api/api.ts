import { Controller, Get, Res, Request, HttpStatus, Body, Ip, Post, Inject, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import {
    ApiBadRequestResponse,
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { LoginUserDto } from '../common/validations/auth.dto';
import { AuthServicesService } from '../app/auth/services/backEnd/auth-services.service';
@Controller('auth')
export class AuthController {
    
    constructor() {}
    
    @Inject()
    private readonly _authService!: AuthServicesService;


    @Post('login')
    @ApiTags('LoginUserDto')
    @ApiOkResponse({
        description: "User have been correctly access, sending a confirm email...",
    })

    // Check the user credential and give back the response to server
    async login(@Body() credentials: LoginUserDto, @Res() res: Response, @Request() req: any){
        try{
            const token = await this._authService.login(
                credentials.email,
                credentials.password,
            );

            return res.status(HttpStatus.OK).send({token})


        } catch (error: unknown) {
            const err = error as Error;
            console.log('Auth Controller | login #ERROR - ', err.message);
      
            // Optionally, return an error response
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
              message: 'An error occurred during login',
            });
          }
    }


    @Get()
    async getAllUsers() {
      const users = await this._authService.login("asd","asd");
      return users;
    }




}

