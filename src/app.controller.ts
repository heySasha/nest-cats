import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { OwnerView } from './entities/owner-view.entity';

@Crud({
  model: {
    type: OwnerView,
  },
})
@Controller()
export class AppController implements CrudController<OwnerView> {
  constructor(public service: AppService) {}
}
