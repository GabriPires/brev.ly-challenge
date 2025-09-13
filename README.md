# Brev.ly - Encurtador de URLs

Uma aplicação completa para encurtamento de URLs, desenvolvida com tecnologias modernas, incluindo API REST robusta e interface web responsiva.

## 🚀 Tecnologias

### Backend (API)

- **Node.js** com **TypeScript**
- **Fastify** - Framework web de alta performance
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **AWS S3** - Armazenamento em nuvem para exportação de relatórios
- **Zod** - Validação de schemas
- **Vitest** - Testes unitários
- **Biome** - Linting e formatação de código

### Frontend (Web)

- **React** com **TypeScript**
- **Vite** - Build tool e bundler
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - Gerenciamento de estado do servidor
- **Axios** - Cliente HTTP
- **React Router** - Roteamento

### DevOps

- **Docker** & **Docker Compose** - Containerização
- **GitHub Actions** - CI/CD
- **pnpm** - Gerenciador de pacotes

## 📋 Funcionalidades

### ✅ Funcionalidades Implementadas

#### API (Backend)

- ✅ Criar links encurtados
- ✅ Validação de URLs
- ✅ Deletar links
- ✅ Obter URL original através do hash encurtado
- ✅ Listar todos os links cadastrados
- ✅ Incrementar contador de acessos
- ✅ Exportar links em CSV
- ✅ Upload de relatórios para CDN (S3)
- ✅ Geração de nomes únicos para arquivos
- ✅ Performance otimizada para listagens

#### Frontend

- ✅ Interface responsiva (desktop e mobile)
- ✅ Criar novos links
- ✅ Listar links pessoais
- ✅ Deletar links
- ✅ Download de relatório em CSV
- ✅ Estados de loading e feedback visual
- ✅ Design fiel ao Figma

### 📊 Campos do Relatório CSV

- URL Original
- URL Encurtada
- Contador de Acessos
- Data de Criação

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes)
- **Docker** e **Docker Compose**

### Variáveis de Ambiente

#### Backend (`server/.env`)

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/brevly"
CLOUDFLARE_ACCOUNT_ID="your-cloudflare-account-id"
CLOUDFLARE_ACCESS_KEY_ID="your-cloudflare-access-key"
CLOUDFLARE_SECRET_ACCESS_KEY="your-cloudflare-secret-access-key"
CLOUDFLARE_BUCKET="your-cloudflare-bucket"
CLOUDFLARE_PUBLIC_URL="your-cloudflare-public-url"
SHORTENER_BASE_URL="http://localhost:3000/links/"
```

#### Frontend (`web/.env`)

```env
VITE_API_URL="http://localhost:3333"
```

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/GabriPires/brev.ly-challenge.git
cd brev.ly-challenge
```

### 2. Configurar o Backend

```bash
cd server

# Instalar dependências
pnpm install

# Subir o banco de dados
docker-compose up -d

# Executar migrações
pnpm run db:migrate

# Iniciar o servidor de desenvolvimento
pnpm run dev
```

A API estará rodando em `http://localhost:3333`

### 3. Configurar o Frontend

```bash
cd web

# Instalar dependências
pnpm install

# Iniciar o servidor de desenvolvimento
pnpm run dev
```

A aplicação web estará rodando em `http://localhost:5173`

## 🧪 Testes

### Backend

```bash
cd server

# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch
```

## 📋 Scripts Disponíveis

### Backend

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm test` - Executa testes
- `pnpm test:watch` - Executa testes em modo watch
- `pnpm build` - Gera build de produção
- `pnpm db:generate` - Gera migrações do banco
- `pnpm db:migrate` - Executa migrações
- `pnpm db:studio` - Abre interface visual do banco

### Frontend

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Gera build de produção
- `pnpm preview` - Visualiza build de produção
- `pnpm lint` - Executa linting

## 🏗️ Estrutura do Projeto

```
brev.ly-challenge/
├── server/              # API Backend
│   ├── src/
│   │   ├── app/         # Camada de aplicação
│   │   ├── infra/       # Infraestrutura (DB, HTTP, Storage)
│   │   ├── shared/      # Utilitários compartilhados
│   │   └── test/        # Utilitários de teste
│   ├── docker/          # Scripts SQL de inicialização
│   └── ...
└── web/                 # Frontend React
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── pages/       # Páginas da aplicação
    │   ├── services/    # Serviços de API
    │   └── ...
    └── ...
```

## 📡 API Endpoints

### Links

- `POST /links` - Criar novo link
- `GET /links` - Listar todos os links
- `GET /links/:hash` - Obter URL original pelo hash
- `DELETE /links/:id` - Deletar link
- `GET /export` - Exportar links em CSV

## 🎨 Interface

A interface foi desenvolvida seguindo um design system moderno e responsivo, com:

- Layout adaptável para desktop e mobile
- Estados de loading e feedback visual
- Componentização reutilizável
- Acessibilidade otimizada

## 📈 Performance

- **Backend**: Utilização de Fastify para alta performance
- **Banco de dados**: Queries otimizadas com Drizzle ORM
- **Frontend**: Build otimizado com Vite e lazy loading
- **Infraestrutura**: Docker para ambiente consistente

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Pires** - [GabriPires](https://github.com/GabriPires)

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
