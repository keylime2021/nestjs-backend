import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from "../model/test.entity";
import { Test } from "../model/test.interface";
import { from, Observable } from "rxjs";

@Injectable()
export class TestService {

    constructor(
        @InjectRepository(TestEntity) 
        private readonly testRepository: Repository<Test>
    ) {}

    async create(test: Test): Promise<Test> {
        return this.testRepository.save(test);
    }

    findAll(): Observable<Test[]> {
        return from(this.testRepository.find());
    }

}
