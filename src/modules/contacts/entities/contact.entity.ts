import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  contact_name: string;
  email: string;
  phones_number: string;
  contact_image: string | null;
  readonly createdAt: Date;

  constructor() {
    this.id = randomUUID();
  }
}
