import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import Cat from './cats.entity';

@Injectable()
export class CatsService {
    constructor (
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>
    ) {}

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async show(id: number): Promise<Cat> {
        return await this.catRepository.findOne(id);
    }

    async create(cat: Cat): Promise<Cat> {
        return await this.catRepository.save(cat)
    }

    async update(cat: Cat): Promise<UpdateResult> {
        return await this.catRepository.update(cat.id, cat)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.catRepository.delete(id)
    }
}