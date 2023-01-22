import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  get(): Promise<UserEntity[]> {
    // return { name: 'Rachana 12 Kafle', email: 'rachana@gmail.com' };
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  show(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
