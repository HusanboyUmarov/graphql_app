import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import {Field, ID, InputType, ObjectType} from '@nestjs/graphql'
import { User } from '../../users/entities/user.entity';
@ObjectType()
@Entity('posts')
export class Post {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    title:string;

    @Field()
    @Column()
    content:string;

    @ManyToOne((type)=> User, (author)=>author.posts)
    @Field((type) =>User)
    author:User
}
