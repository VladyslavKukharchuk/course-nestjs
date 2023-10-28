import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  constructor() {}

  @Get()
  findAll(): any {
    return {
      tags: ['reactjs', 'angularjs'],
    };
  }
}
