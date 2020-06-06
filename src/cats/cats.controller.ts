import { Controller, Get,Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import Cat from './cats.entity';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    index(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    show(@Param('id') id: string): Promise<Cat> {
        return this.catsService.show(Number(id));
    }

    @Post() 
    create(@Body() cat: Cat): Promise<Cat>{
        return this.catsService.create(cat)
    }

    @Put()
    update(@Body() cat: Cat): Promise<any> {
        return this.catsService.update(cat)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<any> {
        return this.catsService.delete(Number(id))
    }
}
