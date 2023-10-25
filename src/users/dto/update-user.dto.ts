import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto{
    @Field({nullable:true})
    name?:string;

    @Field({nullable:true})
    email?:string;
}
