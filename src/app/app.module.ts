import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthServiceService } from './auth/services/frontEnd/auth-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config], // Load the config for database and other settings
    }),
    // CONEXIÓN A LA BASE DE DATOS LOCAL
    TypeOrmModule.forRootAsync({
      name: 'default',
      imports: [ConfigModule], // Removed HttpClientModule
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.mysql.host'),
        port: configService.get('database.mysql.port'),
        username: configService.get('database.mysql.username'),
        password: configService.get('database.mysql.password'),
        database: configService.get('database.mysql.database'),
        autoLoadEntities: true,
        timezone: 'Z',
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthServiceService],
})
export class AppModule {}
