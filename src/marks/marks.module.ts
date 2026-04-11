import { Module } from '@nestjs/common';
import { MarksController } from './marks.controller';
import { MarksService } from './marks.service';
import { StudentsModule } from '../students/students.module';
import { CoursesModule } from '../courses/courses.module';

@Module({
  imports: [StudentsModule, CoursesModule],
  controllers: [MarksController],
  providers: [MarksService],
})
export class MarksModule {}
