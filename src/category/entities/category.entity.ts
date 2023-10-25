import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@ObjectType()
@Entity()
export class Category {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    name:string

    @OneToMany((type)=>Product, (product)=> product.id )
    @Field((type)=>[Product])
    posts: Product[]
}
