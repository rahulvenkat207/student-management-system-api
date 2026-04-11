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
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(
    @Query() filters: FilterStudentDto,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.studentsService.findAll(filters, page, limit);
  }

  @Get('search')
  search(@Query('name') name: string, @Query('email') email: string) {
    return this.studentsService.search(name, email);
  }

  @Get('analytics')
  getAnalytics() {
    return this.studentsService.getAnalytics();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.studentsService.getProfile(id);
  }

  @Get(':id/courses')
  getStudentCourses(
    @Param('id') id: string,
    @Query('semester') semester: string,
    @Query('page') page: number,
  ) {
    return this.studentsService.getStudentCourses(id, semester, page);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
