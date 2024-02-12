import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }


  @MessagePattern()
  async handleMessage(data: string) {
    console.log(data);
  }
}