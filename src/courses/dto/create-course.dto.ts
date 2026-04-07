export class CreateCourseDto {
  title: string;
  code: string;
  credits: number;
  instructor: string;
  maxStudents?: number;
  semester?: string;
}
