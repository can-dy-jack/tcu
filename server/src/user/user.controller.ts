import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../entities/user.entity";
import { CommonReturnType } from "../types";

@Controller("/user")
export class UserController {
  constructor(private readonly app: UserService) {}

  @Get("/getUsers")
  async getUsers(): Promise<CommonReturnType<User[]>> {
    const data = await this.app.findAll();

    return {
      code: 200,
      message: "获取用户列表成功",
      data,
    };
  }
}
