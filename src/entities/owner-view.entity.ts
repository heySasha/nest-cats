import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { Owner } from './owner.entity';
import { Cat } from './cat.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('owner.id', 'id')
      .addSelect('owner.name', 'name')
      .from(Owner, 'owner')
      .addSelect(
        qb =>
          qb
            .select('COUNT(*)', 'total_cats')
            .from(Cat, 'cat')
            .where('cat."ownerId" = owner.id'),
        'totalCats',
      ),
})
export class OwnerView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  totalCats: number;
}
