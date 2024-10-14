import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id/:name')
  findOne(@Param('id') id: string) {
    return `Curso com ID ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Update course with ID ${id}`;
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param(':id') id: string) {
    return `Delete course with ID ${id}`;
  }
}
