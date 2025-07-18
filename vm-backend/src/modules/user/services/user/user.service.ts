import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
@Injectable()
export class UserService {
  @Cron('* * * * * *')
  job1() {
    console.log('This is my first job');
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  job2UsingCronExpression() {
    console.log('This is my second job');
  }

  @Interval(10000)
  sendingEmails() {
    console.log('Sending emails');
  }

  @Timeout(5000)
  clearingTokens() {
    console.log('clearing tokens');
  }
}
