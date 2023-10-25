import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepo: Repository<Category>
  ){}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.create(createCategoryDto);
  }

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: number) {
    return this.categoryRepo.findOne({where:{id}});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepo.update({id}, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepo.delete({id});
  }
}
