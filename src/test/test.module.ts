import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestController } from "./controller/test.controller";
import { TestEntity } from "./model/test.entity";
import { TestService } from "./service/test.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([TestEntity])
    ],
    exports: [ TestService ],
    providers: [ TestService ],
    controllers: [ TestController ]
})

export class TestModule {}