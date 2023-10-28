import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  getAll(): any {
    return {
      tags: ['reactjs', 'angularjs'],
    };
  }
}
