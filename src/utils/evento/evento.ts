import { Evento } from '@/types/evento';

export const mockEventos: Evento[] = [
  {
    owner: 'Fernando Carlos',
    titulo: 'Niver da Claudia',
    data: new Date(),
    capa: 'https://santistadecora.com.br/dicas/wp-content/uploads/2021/05/como-fazer-churrasco-em-casa-santista-1.jpg',
    convidados: '08',
    itens: '10',
  },
  {
    owner: 'Gustavo Ricardo',
    titulo: 'Aniversário',
    data: new Date(),
    capa: 'https://media.gazetadopovo.com.br/2018/12/0cf7f961c50912f0e30632712e93eedd-gpMedium.jpeg',
    convidados: '03',
    itens: '13',
  },
  {
    owner: 'Eduardo Claudio',
    titulo: 'Casamento no Civil',
    data: new Date(),
    capa: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b2/11/f5/recanto-do-rio-nunes.jpg?w=1200&h=-1&s=1',
    convidados: '13',
    itens: '08',
  },
];
