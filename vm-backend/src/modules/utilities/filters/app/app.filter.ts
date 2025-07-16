import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AppFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
