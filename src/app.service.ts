import { Injectable } from '@nestjs/common';
import { OwnerView } from './entities/owner-view.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService extends TypeOrmCrudService<OwnerView> {
  constructor(@InjectRepository(OwnerView) repo) {
    super(repo);
  }
}
