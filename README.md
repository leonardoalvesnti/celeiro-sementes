# 🌱 Celeiro Sementes - Website Oficial

![Vercel Deploy](https://vercelbadge.vercel.app/api/leonardoalvesnti/celeiro-sementes)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat&logo=typescript)

Plataforma unificada e **mobile-first** desenvolvida para a **Celeiro Sementes**, parceira oficial de distribuição das melhores genéticas agrícolas do mercado brasileiro. O sistema conta com estrutura em React (Next.js App Router) focada na altíssima performance, SEO e adequação à identidade visual brutalista e minimalista do agronegócio.

---

## 🗺️ Mapa do Site (Rotas)

A arquitetura de navegação foi projetada para focar o usuário tanto nos produtos técnicos quanto na história da instituição.

*   🏠 **Página Inicial (`/`)**
    *   Painel central apresentando o impacto de +46 anos no mercado.
    *   Sessão rápida para Lançamentos da Safra (ex: Cultivares I2X / IPRO).
    *   Destaques de Blog e Informações de Contato.
*   🌱 **Catálogo Sementes (`/sementes`)**
    *   Portfólio unificado das construtoras genéticas: **Latitude**, **TMG** e **Brasmax**.
    *   Apresentação técnica por card (Ciclo, PMR, Exigência de Fertilidade, Resistência).
*   📖 **Sobre Nós (`/sobre`)**
    *   Timeline cronológica desde a fundação em **1980** (Luziânia-GO) até a consolidação com +46 anos e 9 estados de atuação.
    *   Núcleos de Missão, Visão e Valores.
*   🛡️ **Refúgio (`/refugio`)**
    *   Página educativa com recursos e especificações de plantio de Área de Refúgio.
*   📰 **Blog do Agro (`/blog`)**
    *   Artigos estáticos orientados a SEO cobrindo guias de biotecnologias (*Intacta 2 Xtend*, *Manejo de Nematoides*, etc).
*   🧑‍🌾 **Comercial / Equipe (`/equipe`)**
    *   Visualização regional de representantes de sementes (RTVs) por localização.
*   📞 **Contato (`/contato`)**
    *   Formulário técnico, mapa interativo de rotas.
*   ⚖️ **Legal (LGPD Compliance)**
    *   **Política de Privacidade** (`/politica-de-privacidade`)
    *   **Termos de Uso** (`/termos-de-uso`)

---

## 🏗️ Stack Tecnológico e Módulos

O projeto prioriza performance e fácil manutenção corporativa por meio de componentes puramente funcionais e arquivos de dados JSON/TS.

*   **Core:** Next.js (App Router, Server Components para tempo de resposta nulo) e React 18+.
*   **Estilização:** Tailwind CSS v3 com Design Tokens configurados em `tailwind.config.ts` (`celeiro-green-dark`, `celeiro-yellow`, `celeiro-gray`).
*   **Animação de Interface:** Framer Motion (para fade-ins progressivos e cards modulares).
*   **Armazenamento Estático de Dados:** Todo o conteúdo dinâmico não depende de banco em nuvem nesta arquitetura, estão localizados no repositório `src/data/`:
    *   `src/data/sementes.ts`: Fonte da verdade do acervo para todas as cultivares.
    *   `src/data/empresa.ts`: Textos padrão (redes sociais, missões, endereço) alimentando todo o front-end simultaneamente.
*   **Hospedagem e CI/CD:** Vercel (Edge Network automática).

---

## 🚀 Como Desenvolver e Executar Rápido

Para fazer manutenções pontuais no site localmente:

1.  **Pré-requisitos**: Possuir [Node.js](https://nodejs.org/en/) instalado.
2.  **Clone o projeto** e acesse a raiz:
    ```bash
    git clone https://github.com/leonardoalvesnti/celeiro-sementes.git
    cd celeiro-sementes
    ```
3.  **Instale os pacotes**:
    ```bash
    npm install
    ```
4.  **Inicie o Servidor Dev**:
    ```bash
    npm run dev
    ```
5.  Acesse o navegador em `http://localhost:3000`. Alterações de layout refletem em tempo real (Hot Reload).

---

## 🎨 Operações de Rotina e Gestão de Conteúdo

### Atualizar uma nova Semente ou Mudar Categoria
Para adicionar uma nova semente da **Latitude** ou **TMG** no sistema:
1. Abra `src/data/sementes.ts`.
2. Adicione um novo objeto `Semente` seguindo a interface, definindo a `marca`, `nome`, `ciclo` etc.
*Nota: Após o commit final para branch `main`, a Vercel compila o novo catálogo automaticamente em 40 segundos.*

### Remover Fundo Branco de Imagens (Imagens Transparentes)
A identidade das sementes exige que fiquem sobre o card cinza sem aquele bloco branco de `.jpeg`.
Utilize o script nativo providenciado para converter rapidamente logotipos:
```bash
node scripts/remove-bg-cli.mjs public/images/sementes/ARQUIVO.png
```

---
*Documentação gerada oficialmente para governança do código fonte da Celeiro Sementes.*
