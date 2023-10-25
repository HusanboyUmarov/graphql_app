import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
@InputType()
export class UpdateCategoryDto{

    @Field({nullable:true})
    name?:string;

}
