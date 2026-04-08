// ============================================
// CELEIRO SEMENTES — Equipe Técnica Comercial
// 9 representantes com regiões de atuação
// ============================================

export interface Representante {
  id: string;
  nome: string;
  cargo: string;
  regiao: string;
  estados: string[];
  email: string;
  telefone: string;
  whatsapp: string;
  whatsappLink: string;
  foto: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

export const equipe: Representante[] = [
  {
    id: 'rep-01',
    nome: 'Carlos Henrique Silva',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Sul do Piauí / Norte da Bahia',
    estados: ['PI', 'BA'],
    email: 'carlos@celeirosementes.com.br',
    telefone: '(61) 99829-2255',
    whatsapp: '(61) 99829-2255',
    whatsappLink: 'https://wa.me/5561998292255',
    foto: '/images/equipe/carlos-silva.webp',
    coordenadas: { lat: -9.5, lng: -44.5 },
  },
  {
    id: 'rep-02',
    nome: 'Marcos Antônio Pereira',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Oeste da Bahia',
    estados: ['BA'],
    email: 'marcos@celeirosementes.com.br',
    telefone: '(77) 99876-5432',
    whatsapp: '(77) 99876-5432',
    whatsappLink: 'https://wa.me/5577998765432',
    foto: '/images/equipe/marcos-pereira.webp',
    coordenadas: { lat: -12.1, lng: -45.0 },
  },
  {
    id: 'rep-03',
    nome: 'Fernando Costa Lima',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Maranhão / Tocantins',
    estados: ['MA', 'TO'],
    email: 'fernando@celeirosementes.com.br',
    telefone: '(63) 99812-3456',
    whatsapp: '(63) 99812-3456',
    whatsappLink: 'https://wa.me/5563998123456',
    foto: '/images/equipe/fernando-lima.webp',
    coordenadas: { lat: -7.5, lng: -47.5 },
  },
  {
    id: 'rep-04',
    nome: 'Roberto Mendes Souza',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Mato Grosso',
    estados: ['MT'],
    email: 'roberto@celeirosementes.com.br',
    telefone: '(65) 99834-7890',
    whatsapp: '(65) 99834-7890',
    whatsappLink: 'https://wa.me/5565998347890',
    foto: '/images/equipe/roberto-souza.webp',
    coordenadas: { lat: -12.6, lng: -55.5 },
  },
  {
    id: 'rep-05',
    nome: 'André Luís Oliveira',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Goiás / Distrito Federal',
    estados: ['GO', 'DF'],
    email: 'andre@celeirosementes.com.br',
    telefone: '(62) 99856-4321',
    whatsapp: '(62) 99856-4321',
    whatsappLink: 'https://wa.me/5562998564321',
    foto: '/images/equipe/andre-oliveira.webp',
    coordenadas: { lat: -15.9, lng: -49.2 },
  },
  {
    id: 'rep-06',
    nome: 'Paulo Ricardo Dias',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Minas Gerais',
    estados: ['MG'],
    email: 'paulo@celeirosementes.com.br',
    telefone: '(38) 99823-6789',
    whatsapp: '(38) 99823-6789',
    whatsappLink: 'https://wa.me/5538998236789',
    foto: '/images/equipe/paulo-dias.webp',
    coordenadas: { lat: -17.0, lng: -44.5 },
  },
  {
    id: 'rep-07',
    nome: 'Luciano Barbosa Neto',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Mato Grosso do Sul',
    estados: ['MS'],
    email: 'luciano@celeirosementes.com.br',
    telefone: '(67) 99845-1234',
    whatsapp: '(67) 99845-1234',
    whatsappLink: 'https://wa.me/5567998451234',
    foto: '/images/equipe/luciano-neto.webp',
    coordenadas: { lat: -20.5, lng: -54.6 },
  },
  {
    id: 'rep-08',
    nome: 'Thiago Santos Araújo',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Rio Grande do Sul',
    estados: ['RS'],
    email: 'thiago@celeirosementes.com.br',
    telefone: '(54) 99867-8901',
    whatsapp: '(54) 99867-8901',
    whatsappLink: 'https://wa.me/5554998678901',
    foto: '/images/equipe/thiago-araujo.webp',
    coordenadas: { lat: -28.9, lng: -51.5 },
  },
  {
    id: 'rep-09',
    nome: 'Rafael Moreira Campos',
    cargo: 'Representante Técnico de Vendas',
    regiao: 'Paraná / São Paulo',
    estados: ['PR', 'SP'],
    email: 'rafael@celeirosementes.com.br',
    telefone: '(43) 99878-2345',
    whatsapp: '(43) 99878-2345',
    whatsappLink: 'https://wa.me/5543998782345',
    foto: '/images/equipe/rafael-campos.webp',
    coordenadas: { lat: -23.3, lng: -51.2 },
  },
];
