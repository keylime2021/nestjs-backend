import { Controller, Get, Post } from "@nestjs/common";
import { TestEntity } from "../model/test.entity";
import { Test } from "../model/test.interface";

import { TestService } from "../service/test.service";

@Controller('test')
export class TestController {

    constructor(private testService:  TestService) {}

    @Post('create')
    create() {
        var test: Test;

        test = new TestEntity();
        test.name = 'Junrey';
        test.type = true;
        test.date = new Date();

        return this.testService.create(test);
    }

    @Get('get')
    getAll() {
        return this.testService.findAll();
    }
}