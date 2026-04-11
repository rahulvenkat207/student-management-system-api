import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll(@Query() filters: FilterCourseDto) {
    return this.coursesService.findAll(filters);
  }

  @Get(':id/students')
  getCourseStudents(
    @Param('id') courseId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('department') department: string,
  ) {
    return this.coursesService.getCourseStudents(
      courseId,
      page,
      limit,
      department,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
