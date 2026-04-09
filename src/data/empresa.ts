// ============================================
// CELEIRO SEMENTES — Dados da Empresa
// Centralized company data for Footer, Contact, metadata
// ============================================

export const empresa = {
  nome: 'Celeiro Sementes',
  slogan: 'Paixão para cultivar o futuro',
  descricao:
    'Há mais de 46 anos atuando no mercado de sementes de soja de alta qualidade, a Celeiro Sementes é referência no agronegócio brasileiro.',

  contato: {
    telefoneFixo: '(61) 3621-2946',
    whatsapp: '(61) 99829-2255',
    whatsappNumero: '5561998292255',
    email: 'celeiro@celeirosementes.com.br',
  },

  endereco: {
    logradouro: 'Fazenda Celeiro, Gleba dos Patos',
    complemento: 'Zona Rural',
    cep: '64940-000',
    cidade: 'Monte Alegre do Piauí',
    estado: 'PI',
    completo:
      'Fazenda Celeiro, Gleba dos Patos, Zona Rural, 64940-000, Monte Alegre do Piauí – PI',
    coordenadas: {
      lat: -10.0217,
      lng: -45.3047,
    },
  },

  unidades: [
    {
      nome: 'Sede — Monte Alegre do Piauí',
      estado: 'PI',
      descricao: 'Matriz e centro de operações',
    },
  ],

  redesSociais: {
    instagram: 'https://www.instagram.com/celeirosementes/',
    facebook: 'https://www.facebook.com/celeirosementes/',
    linkedin: 'https://www.linkedin.com/company/celeirosementes/',
  },

  parceiros: ['Brasmax', 'Latitude', 'SoyTech', 'TMG'],

  historia: {
    anosAtividade: 30,
    fundacao: 1994,
    missao:
      'Fornecer sementes de soja de alta qualidade que impulsionem a produtividade do agronegócio brasileiro.',
    visao:
      'Ser reconhecida como a maior referência em sementes de soja no cerrado brasileiro.',
    valores: [
      'Qualidade acima de tudo',
      'Inovação constante',
      'Parceria com o produtor',
      'Sustentabilidade',
      'Transparência',
    ],
  },
} as const;

export type Empresa = typeof empresa;
