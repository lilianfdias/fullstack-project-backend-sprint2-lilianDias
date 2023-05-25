import { randomUUID } from 'node:crypto';
import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phones_number: string;

  @Exclude()
  password: string;
  createAt: Date;

  constructor() {
    this.id = randomUUID();
  }
}
