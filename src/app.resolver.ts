import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
// @UseGuards(Guard)
export class AppResolver {
  @Query(() => Boolean)
  entity(): boolean {
    throw new Error('Some error occured');

    return true;
  }
}
