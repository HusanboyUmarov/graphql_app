import {Field,InputType } from '@nestjs/graphql'
@InputType()
export class CreateProductDto {
    @Field()
    name:string;
    @Field()
    count:number;
    @Field()
    cost:number;
}
