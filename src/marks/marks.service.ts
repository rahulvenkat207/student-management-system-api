import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { CoursesService } from '../courses/courses.service';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';

@Injectable()
export class MarksService {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
  ) {}

  create(dto: CreateMarkDto) {
    const studentCheck = this.studentsService.findOne(dto.studentId);
    const courseCheck = this.coursesService.findOne(dto.courseId);

    return {
      message: 'Mark recorded',
      data: dto,
      meta: { recordedAt: new Date().toISOString() },
      verification: {
        student: studentCheck.message,
        course: courseCheck.message,
      },
    };
  }

  getStudentMarks(studentId: string, semester: string, examType: string) {
    return {
      message: `Marks for student ${studentId}`,
      filters: { semester, examType },
      data: [],
    };
  }

  getStudentAverage(studentId: string) {
    return {
      message: `Average for student ${studentId}`,
      data: { average: 0, totalExams: 0 },
    };
  }

  getLeaderboard(
    courseId: string,
    limit: number,
    semester: string,
    includeDetails: boolean,
  ) {
    return {
      message: `Leaderboard for course ${courseId}`,
      filters: { semester, limit: Number(limit) || 10 },
      includeDetails,
      data: [],
    };
  }

  update(studentId: string, courseId: string, dto: UpdateMarkDto) {
    return {
      message: `Mark updated for student ${studentId} in course ${courseId}`,
      updatedFields: dto,
    };
  }
}
