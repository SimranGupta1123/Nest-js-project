import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() updateUserDto: UserCreateDto) {
    return this.userService.create(updateUserDto);
  }

  @Patch(':userId')
  update(@Body() body: any, @Param('userId', ParseIntPipe)  userId: number ) {
    return this.userService.update(body, userId);
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number ) {
    return this.userService.delete(userId);
  }

 
}
