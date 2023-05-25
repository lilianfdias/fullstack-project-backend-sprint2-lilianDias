import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contact.repository';
import { Contact } from '../../entities/contact.entity';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];

  create(data: CreateContactDto, userId: string): Contact | Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
      userId: userId,
      contact_image: data.contact_image || null,
    });
    this.database.push(newContact);
    return plainToInstance(Contact, newContact);
  }
  findOne(id: string): Contact | Promise<Contact> {
    const contact = this.database.find((contact) => contact.id === id);
    return plainToInstance(Contact, contact);
  }
  findAll(): Contact[] | Promise<Contact[]> {
    return plainToInstance(Contact, this.database);
  }
  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };
    return plainToInstance(Contact, this.database[contactIndex]);
  }
  delete(id: string): void | Promise<void> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database.splice(contactIndex, 1);
  }
}
