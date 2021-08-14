import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateIconDto } from './dto/create-icon.dto';
import { Icon } from './entities/icon.entity';
import { Request } from 'express';

@Injectable()
export class IconService {
  constructor(
    @InjectRepository(Icon)
    private iconRepository: Repository<Icon>,
    private httpService: HttpService
  ) {}

  callIcon() {
    console.log('callings http');

    return this.httpService
      .get<Icon>('https://materialdesignicons.com/api/icons')
      .subscribe((d) => {
        console.log(d);
      });
  }

  create(createIconDto: CreateIconDto) {
    return 'This action adds a new icon';
  }

  async findAll(request?: Request) {
    // this.httpService
    //   .get<Icon[]>('https://materialdesignicons.com/api/icons')
    //   .subscribe((d) => {
    //     this.iconRepository.save(d.data);
    //   });
    const query = request.query;
    const take = query.take || 10;
    const skip = query.skip || 0;
    const qName = (query.name as string) || '';

    const [result, totalElements] = await this.iconRepository.findAndCount({
      where: { name: Like('%' + qName + '%') },
      order: { name: 'ASC' },
      take: take,
      skip: skip,
    });

    return {
      page: {
        totalElements,
      },
      _embedded: {
        icons: result,
      },
      _links: {},
    };
    // return this.iconRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} icon`;
  }

  update(id: number, updateIconDto: any) {
    return `This action updates a #${id} icon`;
  }

  remove(id: number) {
    return `This action removes a #${id} icon`;
  }
}
