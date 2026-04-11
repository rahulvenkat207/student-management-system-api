import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';

@Injectable()
export class CoursesService {
  create(dto: CreateCourseDto) {
    return {
      message: 'Course created',
      data: dto,
      meta: { createdAt: new Date().toISOString() },
    };
  }

  findAll(filters: FilterCourseDto) {
    return {
      message: 'All courses',
      appliedFilters: filters,
      data: [],
    };
  }

  findOne(id: string) {
    return { message: `Course ${id}`, data: { id } };
  }

  getCourseStudents(
    courseId: string,
    page: number,
    limit: number,
    department: string,
  ) {
    return {
      message: `Students in course ${courseId}`,
      filters: { department },
      pagination: { page: Number(page) || 1, limit: Number(limit) || 10 },
      data: [],
    };
  }

  update(id: string, dto: UpdateCourseDto) {
    return { message: `Course ${id} updated`, updatedFields: dto };
  }

  remove(id: string) {
    return {
      message: `Course ${id} removed`,
    };
  }
}
