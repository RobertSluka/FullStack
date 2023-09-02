import {Entity, PrimaryKey, Property} from "@mikro-orm/core"
import {Field, Int, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Post {

    constructor(title: string) {
        this.title = title;

    }

    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({type: "date", default:'NOW()'})
    createdAt: Date = new Date();

    @Field(()=> String)
    @Property({ type: 'date' ,onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @Field()
    @Property({type: "text"})
    title!: string;
}