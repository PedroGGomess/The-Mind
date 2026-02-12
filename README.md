# THE 100's Mind

**AI Design Engine & Smart Retail Platform**

This is a smart retail platform that provides real-time insights, AI-powered recommendations, and comprehensive store management tools. The original design is available at https://www.figma.com/design/CG3P8kKl9mcVRf76FdbAQI/The100s-Mind.

![THE 100's Mind Dashboard](https://github.com/user-attachments/assets/3d45d638-3cb8-48fd-bab8-c04cbebde1fb)

## 🚀 Getting Started / Como Começar

### Prerequisites / Pré-requisitos

- Node.js 18+ installed on your system
- npm or pnpm package manager

### Installation / Instalação

1. **Install dependencies / Instalar dependências:**
   ```bash
   npm install
   ```
   or if you prefer pnpm:
   ```bash
   pnpm install
   ```

2. **Start the development server / Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Open your browser / Abrir o navegador:**
   
   The application will be available at `http://localhost:5173/`
   
   A aplicação estará disponível em `http://localhost:5173/`

## 🎯 Features / Funcionalidades

The platform includes the following pages and features:

### Main Features / Principais Funcionalidades

- **Overview** - Dashboard with key metrics, AI recommendations, and store insights
- **Live Store** - Real-time store monitoring and customer tracking
- **Zones** - Store zone analytics and heat mapping
- **Wine Tasting** - Wine tasting session management (Admin only)
- **Visual Merchandising** - Product display optimization (Admin only)
- **Concierge** - Customer service management (Admin only)
- **Staff Intelligence** - Staff performance and scheduling
- **Inventory Intelligence** - Stock management and predictions
- **Tasks** - Task creation and management
- **Alerts** - Real-time alerts and notifications
- **Funnel Analytics** - Customer journey analytics (Admin only)
- **Equipment** - Equipment monitoring and maintenance (Admin only)
- **Reports** - Comprehensive reporting tools (Admin only)
- **Multi-Store** - Multi-location management (Admin only)
- **Settings** - Application settings and preferences (Admin only)

### User Roles / Funções de Utilizador

The application supports two user roles:

- **Admin View** - Full access to all features
- **Staff View** - Limited access to operational features only

You can switch between roles using the dropdown in the top-right corner.

Pode alternar entre funções usando o menu no canto superior direito.

## 🛠️ Available Commands / Comandos Disponíveis

```bash
# Start development server / Iniciar servidor de desenvolvimento
npm run dev

# Build for production / Compilar para produção
npm run build

# Type checking / Verificação de tipos
npm run typecheck
```

## 📱 How to Use / Como Usar

1. **Navigate between pages** - Use the sidebar on the left to switch between different sections
   
   **Navegar entre páginas** - Use a barra lateral à esquerda para alternar entre diferentes secções

2. **Switch user roles** - Use the "Admin View" / "Staff View" dropdown in the top-right corner
   
   **Alternar funções** - Use o menu "Admin View" / "Staff View" no canto superior direito

3. **Select store and time range** - Use the dropdowns at the top to filter data by store location and time period
   
   **Selecionar loja e período** - Use os menus no topo para filtrar dados por localização e período

4. **Interact with AI recommendations** - Click on recommendation cards to create tasks or view detailed analytics
   
   **Interagir com recomendações IA** - Clique nos cartões de recomendação para criar tarefas ou ver análises detalhadas

## 📋 Project Structure / Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # Reusable UI components
│   │   ├── ui/        # Base UI components (buttons, inputs, etc.)
│   │   └── dashboard/ # Dashboard-specific components
│   └── pages/         # Application pages
└── styles/            # Global styles
```

## 🔧 Technology Stack / Tecnologias

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives
- **Material UI** - Additional UI components

## 📝 License

This project is based on the Figma design available at the link above.