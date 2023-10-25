import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>
  ){}
  create(createProductDto: CreateProductDto) {
    return this.productRepo.create(createProductDto);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findOne({where:{id}});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepo.update({id}, {...updateProductDto});
    return this.productRepo.findOne({where:{id}})
  }

  async remove(id: number) {
    return await this.productRepo.delete({id});
  }
}
