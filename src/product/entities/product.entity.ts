import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne} from 'typeorm'
import {ObjectType, Field, ID} from '@nestjs/graphql'
import { Category } from '../../category/entities/category.entity';

@ObjectType()
@Entity('products')
export class Product {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()

    @Field()
    name:string;

    @Field()
    @Column()

    @Field()
    count:number;

    @Field()
    @Column()
    cost:number;

    @ManyToOne((type)=> Category, (product)=>product.id)
    @Field((type) =>Category)
    author:Category
}
