import { ClientDTO } from "../models/client";


export function findAll(): ClientDTO[] {
   return clients;
}

export function findById(id: number): ClientDTO | undefined {
   return clients.find(x => x.id === id);
}

let clients: ClientDTO[] = [
   {
      id: 1,
      nome: 'João da Silva',
      email: 'joao@email.com',
      telefone: '11999999999',
      endereço: 'Rua das Flores, 123',
      cpf: '123.456.789-00'
   },
   {
      id: 2,
      nome: 'Maria José',
      email: 'maria@email.com',
      telefone: '11988888888',
      endereço: 'Avenida Paulista, 456',
      cpf: '987.654.321-99'
   },
   {
      id: 3,
      nome: 'Pedro Antônio',
      email: 'pedro@email.com',
      telefone: '11977777777',
      endereço: 'Rua dos Pássaros, 789',
      cpf: '456.789.123-45'
   },
   {
      id: 4,
      nome: 'Ana Maria',
      email: 'ana@email.com',
      telefone: '11966666666',
      endereço: 'Rua das Árvores, 321',
      cpf: '246.135.798-70'
   },
   {
      id: 5,
      nome: 'Carlos Alberto',
      email: 'carlos@email.com',
      telefone: '11955555555',
      endereço: 'Rua dos Jardins, 159',
      cpf: '753.642.189-20'
   },
   {
      id: 6,
      nome: 'Juliana Santos',
      email: 'juliana@email.com',
      telefone: '11944444444',
      endereço: 'Rua das Rosas, 357',
      cpf: '369.852.147-60'
   },
   {
      id: 7,
      nome: 'Mateus Oliveira',
      email: 'mateus@email.com',
      telefone: '11933333333',
      endereço: 'Rua dos Lagos, 741',
      cpf: '159.753.246-80'
   },
   {
      id: 8,
      nome: 'Bianca Sousa',
      email: 'bianca@email.com',
      telefone: '11922222222',
      endereço: 'Rua das Montanhas, 963',
      cpf: '753.159.246-90'
   },
   {
      id: 9,
      nome: 'Vitor Hugo',
      email: 'vitor@email.com',
      telefone: '11911111111',
      endereço: 'Rua das Estrelas, 852',
      cpf: '369.753.198-20'
   },
]