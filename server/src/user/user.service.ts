import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.UserRepo.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.UserRepo.findOneBy({ id });
  }

  async move(id: number): Promise<void> {
    await this.UserRepo.delete(id);
  }

  async create(user: User): Promise<User> {
    return this.UserRepo.save(user);
  }
}
