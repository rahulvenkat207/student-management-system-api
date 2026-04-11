import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private enrollmentsService: EnrollmentsService) {}

  @Post()
  enroll(@Body() dto: CreateEnrollmentDto) {
    return this.enrollmentsService.enroll(dto);
  }

  @Get('student/:studentId')
  getStudentEnrollments(
    @Param('studentId') studentId: string,
    @Query('semester') semester: string,
  ) {
    return this.enrollmentsService.getStudentEnrollments(studentId, semester);
  }

  @Get('course/:courseId')
  getCourseEnrollments(
    @Param('courseId') courseId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.enrollmentsService.getCourseEnrollments(courseId, page, limit);
  }

  @Delete(':studentId/:courseId')
  unenroll(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ) {
    return this.enrollmentsService.unenroll(studentId, courseId);
  }
}
