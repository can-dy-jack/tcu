import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    // TODO 根据环境变量来
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "rop29813A#",
      database: "tcu",
      entities: [User],
      synchronize: true, // 仅在开发环境使用，生产环境请设置为 false
      logging: true, // 仅在开发环境使用，生产环境请设置为 false
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
