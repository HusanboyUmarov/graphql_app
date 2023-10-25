import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Resolver, Args, ID, Query, Mutation} from '@nestjs/graphql'
import { Product } from './entities/product.entity';
@Resolver('product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(()=>Product)
  createProduct(@Args('createProduct') createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Query(()=>[Product])
  allProduct() {
    return this.productService.findAll();
  }

  @Query(()=>Product)
  oneProduct(@Args('id', {type:()=>ID}) id: string) {
    return this.productService.findOne(+id);
  }

  @Mutation(()=>Product)
  updateProduct(@Args('id', {type:()=>ID}) id: string, @Args('updateProduct') updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Mutation(()=>Number)
  removeProduct(@Args('id', {type:()=>ID}) id: string) {
    return this.productService.remove(+id);
  }
}
