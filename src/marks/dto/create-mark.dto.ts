export class CreateMarkDto {
  studentId: string;
  courseId: string;
  score: number; // 0-100
  examType: string; // 'midterm' | 'final' | 'assignment'
  semester: string;
}
