// ============================================
// CELEIRO SEMENTES — Blog / Artigos
// 5 artigos iniciais para migração
// ============================================

export interface Artigo {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  autor: string;
  dataPublicacao: string;
  categoria: string;
  imagem: string;
  tags: string[];
}

export const categorias = [
  'Tecnologia de Sementes',
  'Manejo de Solo',
  'Mercado Agro',
  'Sustentabilidade',
  'Dicas de Plantio',
] as const;

export const artigos: Artigo[] = [
  {
    id: 'art-01',
    slug: 'importancia-do-tratamento-de-sementes',
    titulo: 'A Importância do Tratamento de Sementes para uma Safra Produtiva',
    resumo:
      'O tratamento de sementes é um investimento essencial para garantir o estabelecimento uniforme da lavoura e proteger contra pragas e doenças iniciais.',
    conteudo: `
# A Importância do Tratamento de Sementes para uma Safra Produtiva

O tratamento de sementes (TS) é uma das práticas mais importantes e rentáveis na agricultura moderna. Consiste na aplicação de defensivos químicos e/ou biológicos diretamente nas sementes antes do plantio, formando uma barreira protetora contra pragas, doenças e nematoides que podem comprometer o estabelecimento inicial da lavoura.

## Por que investir no Tratamento de Sementes?

### 1. Proteção contra pragas de solo
Insetos como o corós, lagarta-elasmo e percevejos castanhos podem causar danos severos nas plântulas. O TS cria uma proteção sistêmica nos primeiros dias após a emergência.

### 2. Controle de doenças iniciais
Fungos de solo, como *Rhizoctonia*, *Fusarium* e *Phytophthora*, são combatidos de forma preventiva, garantindo uma emergência uniforme.

### 3. Retorno sobre investimento
Estudos mostram que o TS tem um dos maiores retornos sobre investimento (ROI) dentre todas as práticas agrícolas, com custo relativamente baixo e impacto significativo na produtividade final.

## Boas práticas no TS

- Utilizar sementes de alta qualidade e certificadas
- Seguir as recomendações técnicas de dosagem
- Garantir cobertura uniforme nas sementes
- Armazenar corretamente as sementes tratadas

Na **Celeiro Sementes**, todas as nossas cultivares são disponibilizadas com opções de tratamento industrial de sementes (TSI), garantindo máxima proteção desde o primeiro dia de plantio.
    `,
    autor: 'Equipe Técnica Celeiro',
    dataPublicacao: '2025-09-15',
    categoria: 'Tecnologia de Sementes',
    imagem: '/images/blog/tratamento-sementes.webp',
    tags: ['tratamento de sementes', 'TSI', 'proteção', 'produtividade'],
  },
  {
    id: 'art-02',
    slug: 'tecnologia-intacta-2-xtend',
    titulo: 'Intacta 2 Xtend: O Que Muda na Prática para o Produtor',
    resumo:
      'Entenda as vantagens da tecnologia Intacta 2 Xtend (I2X) e como ela está revolucionando o manejo de lagartas e plantas daninhas na soja.',
    conteudo: `
# Intacta 2 Xtend: O Que Muda na Prática para o Produtor

A tecnologia **Intacta 2 Xtend** (I2X) representa a evolução da plataforma Intacta, combinando proteção contra as principais lagartas da soja com tolerância a herbicidas de diferentes mecanismos de ação.

## Principais vantagens do I2X

### Proteção ampliada contra lagartas
O I2X oferece controle eficaz contra a lagarta-da-soja (*Anticarsia gemmatalis*), lagarta-falsa-medideira (*Chrysodeixis includens*) e broca-das-axilas (*Crocidosema aporema*).

### Flexibilidade no manejo de plantas daninhas
Com tolerância ao glifosato e ao dicamba, o I2X amplia as opções de manejo herbicida, permitindo o controle de plantas daninhas resistentes ao glifosato.

### Aumento do potencial produtivo
As novas cultivares com tecnologia I2X apresentam genéticas de alto potencial produtivo, aliando proteção e performance.

## Cuidados no manejo

- Respeitar as áreas de refúgio (20% da área plantada com soja convencional)
- Seguir as recomendações de aplicação do dicamba
- Realizar monitoramento constante da lavoura

A **Celeiro Sementes** oferece diversas cultivares com tecnologia I2X das principais obtentoras. Consulte nosso catálogo e fale com nosso time técnico.
    `,
    autor: 'Equipe Técnica Celeiro',
    dataPublicacao: '2025-10-22',
    categoria: 'Tecnologia de Sementes',
    imagem: '/images/blog/intacta-2-xtend.webp',
    tags: ['intacta 2 xtend', 'I2X', 'biotecnologia', 'manejo integrado'],
  },
  {
    id: 'art-03',
    slug: 'areas-de-refugio-importancia',
    titulo: 'Áreas de Refúgio: Por Que Elas São Essenciais para a Agricultura',
    resumo:
      'As áreas de refúgio são fundamentais para preservar a eficácia das tecnologias Bt e garantir a sustentabilidade da produção agrícola.',
    conteudo: `
# Áreas de Refúgio: Por Que Elas São Essenciais

O plantio de áreas de refúgio é uma prática obrigatória e estratégica para todos os produtores que utilizam sementes com tecnologia Bt (biotecnologia que confere resistência a insetos).

## O que é a área de refúgio?

É uma parcela da lavoura (mínimo de 20% da área total) plantada com cultivares de soja **sem** a tecnologia Bt. Essa área permite que insetos suscetíveis sobrevivam e se reproduzam com eventuais insetos resistentes, diluindo a resistência na população.

## Por que é obrigatória?

Se 100% da área fosse plantada com Bt, a pressão de seleção faria com que apenas insetos resistentes sobrevivessem, tornando a tecnologia ineficaz em poucos anos.

## Como plantar o refúgio corretamente

1. **Proporção:** Mínimo de 20% da área total
2. **Proximidade:** As faixas de refúgio devem estar a no máximo 800 metros da área Bt
3. **Manejo:** O refúgio pode e deve receber aplicações de inseticidas quando necessário

A **Celeiro Sementes** disponibiliza cultivares convencionais e RR ideais para compor as áreas de refúgio. Preservar a biotecnologia é preservar o futuro!
    `,
    autor: 'Equipe Técnica Celeiro',
    dataPublicacao: '2025-11-05',
    categoria: 'Sustentabilidade',
    imagem: '/images/blog/areas-refugio.webp',
    tags: ['refúgio', 'Bt', 'sustentabilidade', 'manejo integrado'],
  },
  {
    id: 'art-04',
    slug: 'manejo-solo-cerrado',
    titulo: 'Manejo de Solo no Cerrado: Construindo a Fertilidade para Alta Produtividade',
    resumo:
      'Solos do cerrado exigem construção de fertilidade. Conheça as melhores práticas de calagem, gessagem e adubação para maximizar sua safra.',
    conteudo: `
# Manejo de Solo no Cerrado

Os solos do cerrado brasileiro, embora profundos e bem drenados, apresentam naturalmente baixa fertilidade, alta acidez e elevada saturação por alumínio. A construção da fertilidade é um processo contínuo e essencial.

## Pilares do manejo de solo

### 1. Calagem
A correção da acidez com calcário é o primeiro passo. Busque elevar a saturação por bases (V%) para 50-60% na camada de 0-20 cm.

### 2. Gessagem
O gesso agrícola complementa a calagem, atuando em profundidade (20-60 cm), melhorando o ambiente radicular e a tolerância ao déficit hídrico.

### 3. Adubação equilibrada
Fósforo, potássio e micronutrientes devem ser aplicados conforme análise de solo, respeitando as faixas de suficiência.

### 4. Matéria orgânica
O sistema de plantio direto e a rotação de culturas são fundamentais para o incremento de matéria orgânica.

## Escolha a cultivar certa para o seu solo

Na **Celeiro Sementes**, cada cultivar tem indicação clara de exigência em fertilidade. Consulte nossa equipe técnica para a melhor recomendação!
    `,
    autor: 'Equipe Técnica Celeiro',
    dataPublicacao: '2025-12-10',
    categoria: 'Manejo de Solo',
    imagem: '/images/blog/manejo-solo-cerrado.webp',
    tags: ['cerrado', 'solo', 'calagem', 'fertilidade', 'produtividade'],
  },
  {
    id: 'art-05',
    slug: 'mercado-soja-perspectivas-safra',
    titulo: 'Mercado da Soja: Perspectivas e Tendências para a Safra 2025/26',
    resumo:
      'Análise do cenário atual do mercado de soja brasileiro e mundial, com perspectivas de preço e produtividade para a safra 2025/26.',
    conteudo: `
# Mercado da Soja: Perspectivas para a Safra 2025/26

O Brasil consolida sua posição como maior produtor e exportador mundial de soja, com área plantada superando 46 milhões de hectares na safra 2025/26.

## Cenário atual

### Produção recorde
A expectativa é de produção acima de 170 milhões de toneladas, impulsionada pela expansão de área e pelo uso de tecnologias de alto potencial produtivo.

### Demanda global aquecida
China, União Europeia e sudeste asiático mantêm demanda firme por soja brasileira, tanto para farelo quanto para óleo.

### Câmbio favorável
A desvalorização do real frente ao dólar beneficia as exportações e sustenta os preços internos.

## Tendências para o produtor

1. **Diversificação de cultivares:** Não apostar tudo em uma única genética
2. **Gestão de risco:** Comercialização antecipada e uso de ferramentas de hedge
3. **Investimento em tecnologia:** Cultivares de alto potencial com tecnologia embarcada

A **Celeiro Sementes** está preparada para esta safra com um portfólio completo. Fale com nosso time e garanta suas sementes!
    `,
    autor: 'Equipe Técnica Celeiro',
    dataPublicacao: '2026-01-20',
    categoria: 'Mercado Agro',
    imagem: '/images/blog/mercado-soja.webp',
    tags: ['mercado', 'soja', 'safra', 'preços', 'tendências'],
  },
];
