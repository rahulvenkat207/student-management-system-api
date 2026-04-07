// Represents all the @Query params for filtering students
export class FilterStudentDto {
  age?: number;
  department?: string;
  search?: string; // search by name
  page?: number;
  limit?: number;
  sortBy?: string; // 'name' | 'age'
  order?: string; // 'asc' | 'desc'
}
