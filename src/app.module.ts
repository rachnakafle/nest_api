import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { UserEntity } from "./user/entities/user.entity";
import { UserModule } from "./user/user.module";

@Module({
    controllers:[AppController],
    imports: [UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: null,
            database: 'nestjs',
            entities: [UserEntity],
            synchronize: true,
          }),
      ]
})
export class AppModule {}