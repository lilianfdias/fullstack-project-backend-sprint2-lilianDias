import { randomUUID } from 'node:crypto';
import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phones_number: string;
  user_image: string;
  readonly createAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
