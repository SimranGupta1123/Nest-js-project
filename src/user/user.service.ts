import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserCreateDto } from './dto/user-create.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    // return { name: 'Imstan', email: 'sim@gmail.com' };
    return this.userRepository.find();
  }

  create(body: any): Promise<any> {
    return this.userRepository.save(body);
  }

  update(updateUserDto: UserCreateDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  show(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
