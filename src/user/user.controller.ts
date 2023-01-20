import {
    Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { Request } from 'express';
import { UserService } from './user.service';

@ApiTags('First')
@Controller('user')
export class UserController {
//   private userService;
  constructor(private userService : UserService) {
    // this.userService = new UserService();
  }
  // /user
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() req: Request) {
    // console.log(req);
    
   return this.userService.create(req);
  }

  @Patch(':/userId')
  update(@Body() body:any, @Param() param: {userId:number}){
   return this.userService.update(body,param);
  }
  
  @Get('/:userId')

  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
