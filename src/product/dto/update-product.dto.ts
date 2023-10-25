import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {Field, InputType}from '@nestjs/graphql'
@InputType()
export class UpdateProductDto {
    @Field({nullable:true})
    name?:string;
    @Field({nullable:true})
    count?:number;
    @Field({nullable:true})
    cost?:number;
}
