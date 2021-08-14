import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { EntityMetadata } from './entity-meta/entity-meta';

const model = 'apps/api/src/assets/json/models.json';

@Injectable()
export class AppService {
  getData() {
    return this.readEntityMetadata();
  }

  getMetadata(name: string) {
    return JSON.parse(
      fs.readFileSync(`apps/api/src/assets/json/entities/${name}.json`, {
        encoding: 'utf-8',
      })
    );
  }

  getIcons() {
    return JSON.parse(
      fs.readFileSync(`apps/api/src/assets/json/icons.json`, {
        encoding: 'utf-8',
      })
    );
  }

  save(entityMetadata: EntityMetadata) {
    const entityMetadataJSON = this.readEntityMetadata();
    entityMetadataJSON[entityMetadata.id] = entityMetadata;
    this.writeEntityMetadata(entityMetadataJSON);
  }

  private readEntityMetadata() {
    return JSON.parse(
      fs.readFileSync(model, {
        encoding: 'utf-8',
      })
    );
  }

  private writeEntityMetadata(json: Record<string, EntityMetadata>) {
    fs.writeFileSync(model, JSON.stringify(json));
  }
}
