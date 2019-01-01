import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { LocationModule } from './location/location.module';
import { join, resolve } from 'path';
import { buildSchema } from 'type-graphql';
import { CityResolver } from './location/city.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule,
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.gql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //     outputAs: 'class',
    //   },
    // }),
    GraphQLModule.forRootAsync({
      useFactory: async () => {
        const config: GqlModuleOptions = {
          typePaths: [join(process.cwd(), `src/api.gql`)],
          installSubscriptionHandlers: true,
        };

        const schema = await buildSchema({
          // buildSchema is method from type-graphql library
          resolvers: [CityResolver],
          emitSchemaFile: resolve(process.cwd(), `src/api.gql`),
        });

        return { ...config, graphql: { schema } };
      },
    }),
  ],
})
export class AppModule {}
