import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LocationModule } from './location/location.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class AppModule {}
