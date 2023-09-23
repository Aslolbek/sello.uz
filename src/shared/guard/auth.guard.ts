import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();

      const token = req.headers.authorization?.split(' ')[1];
      const { id } = this.jwtService.verify(token);
      req.user = id;
      return true;
    } catch (error) {
      return false;
    }
  }
}
