import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MarksService } from './marks.service';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';

@Controller('marks')
export class MarksController {
  constructor(private marksService: MarksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMarkDto: CreateMarkDto) {
    return this.marksService.create(createMarkDto);
  }

  @Get('student/:studentId')
  getStudentMarks(
    @Param('studentId') studentId: string,
    @Query('semester') semester: string,
    @Query('examType') examType: string,
  ) {
    return this.marksService.getStudentMarks(studentId, semester, examType);
  }

  @Get('student/:studentId/average')
  getStudentAverage(@Param('studentId') studentId: string) {
    return this.marksService.getStudentAverage(studentId);
  }

  @Get('course/:courseId/leaderboard')
  getLeaderboard(
    @Param('courseId') courseId: string,
    @Query('limit') limit: number,
    @Query('semester') semester: string,
  ) {
    return this.marksService.getLeaderboard(courseId, limit, semester, false);
  }

  @Put(':studentId/:courseId')
  update(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
    @Body() updateMarkDto: UpdateMarkDto,
  ) {
    return this.marksService.update(studentId, courseId, updateMarkDto);
  }
}
