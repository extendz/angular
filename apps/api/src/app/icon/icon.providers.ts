import { Connection } from 'typeorm';
import { Icon } from './entities/icon.entity';

export const IconProviders = [
  {
    provide: 'ICON_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Icon),
    inject: ['DATABASE_CONNECTION'],
  },
];
