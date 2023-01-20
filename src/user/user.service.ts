import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return { name: 'Rachana 12 Kafle', email: 'rachana@gmail.com' };
  }

  create(req: Request) {
    return req;
  }

  update(body: any, param: { userId: number }) {
    return { body: body, param };
  }

  getUser(){

  }

  delete(param: { userId: number}){
    return param;
  }
}
