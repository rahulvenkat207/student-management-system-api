import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { CoursesService } from '../courses/courses.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentsService {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
  ) {}

  enroll(dto: CreateEnrollmentDto) {
    const studentExists = this.studentsService.findOne(dto.studentId);
    const courseExists = this.coursesService.findOne(dto.courseId);

    return {
      message: `Student ${dto.studentId} enrolled in course ${dto.courseId}`,
      semester: dto.semester,
      verification: {
        studentCheck: studentExists.message,
        courseCheck: courseExists.message,
      },
    };
  }

  getStudentEnrollments(studentId: string, semester: string) {
    return {
      message: `Enrollments for student ${studentId}`,
      filters: { semester },
      data: [],
    };
  }

  getCourseEnrollments(courseId: string, page: number, limit: number) {
    return {
      message: `Enrollments for course ${courseId}`,
      pagination: { page: Number(page) || 1, limit: Number(limit) || 10 },
      data: [],
    };
  }

  unenroll(studentId: string, courseId: string) {
    return {
      message: `Student ${studentId} unenrolled from course ${courseId}`,
    };
  }
}
