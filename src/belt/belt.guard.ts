import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Validate request, ex:
    // const request = context.switchToHttp().getRequest(); // Parse req
    // const hasBlackBelt = request.user.belts.includes('black')
    // return hasBlackBelt --> Will return a boolean
    return false;
  }
}
