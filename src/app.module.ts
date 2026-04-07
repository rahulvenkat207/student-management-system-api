import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { MarksModule } from './marks/marks.module';

@Module({
  imports: [StudentsModule, CoursesModule, EnrollmentsModule, MarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
