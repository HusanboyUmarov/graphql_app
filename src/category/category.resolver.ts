import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../product/entities/product.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(()=>Category)
  create(@Args('createCategory') createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Query(()=>[Category])
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(()=>Product)
  findOne(@Args('id', {type:()=>ID}) id: string) {
    return this.categoryService.findOne(+id);
  }

  @Mutation(()=>Category)
  update(@Args('id', {type:()=>ID}) id: string, @Args('updateCategory') updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Mutation(()=>Number)
  remove(@Args('id', {type:()=>ID}) id: string) {
    return this.categoryService.remove(+id);
  }
}
