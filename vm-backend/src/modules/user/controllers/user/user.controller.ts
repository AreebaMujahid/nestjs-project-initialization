import { Controller } from '@nestjs/common';
import { CronJob } from 'cron';
import { Post, Delete } from '@nestjs/common';
import {
  ScheduleModule,
  SchedulerRegistry,
  Cron,
  CronExpression,
} from '@nestjs/schedule';

@Controller('user')
export class UserController {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  @Post('create-backup-job')
  createBackupJob() {
    const job = new CronJob('*/5 * * * * *', () => {
      console.log('Running backup job ');
    });
    this.schedulerRegistry.addCronJob('backup-job', job);
    job.start();
    return { message: 'Backup job creaed and started' };
  }

  @Post('pause-backup-job')
  pauseBackupJob() {
    const job = this.schedulerRegistry.getCronJob('backup-job');
    job.stop();
    return { message: 'Backup job paused' };
  }

  @Post('resuming-backup-job')
  resumeBackupJob() {
    const job = this.schedulerRegistry.getCronJob('backup-job');
    job.start();
    return { message: 'Backup job resumed' };
  }

  @Delete('delete-backup-job')
  deleteeBackupJob() {
    this.schedulerRegistry.deleteCronJob('backup-job');
    return { message: 'Backup job deleted' };
  }
}
