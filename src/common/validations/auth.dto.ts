import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    @ApiProperty({
        name: 'email',
        type: 'string',
        description: 'Email del usuario',
        example: 'ejemplo@test.com'
    })
    email!: string;

    @IsNotEmpty()
    @ApiProperty({
        name: 'password',
        type: 'string',
        description: 'Contraseña del usuario sin cifrar'
    })
    password!: string;
}
