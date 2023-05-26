import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });
    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        contact_name: contact.contact_name,
        email: contact.email,
        phones_number: contact.phones_number,
        contact_image: contact.contact_image,
        userId,
      },
    });
    return newContact;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contactUpdated = this.prisma.contact.update({
      data,
      where: { id },
    });
    return contactUpdated;
  }

  async delete(id: string): Promise<void> {
    this.prisma.contact.delete({
      where: { id },
    });
    return;
  }
}
