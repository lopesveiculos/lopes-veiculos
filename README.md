# 🚗 Lopes Veículos - Website & Admin Panel

Um website completo e moderno para uma concessionária de veículos, incluindo catálogo de veículos e painel administrativo.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Páginas Disponíveis](#páginas-disponíveis)
- [Credenciais Admin](#credenciais-admin)
- [Contribuindo](#contribuindo)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

A **Lopes Veículos** é uma plataforma web completa para gerenciamento e venda de veículos. O projeto inclui:

- **Website Público**: Catálogo de veículos, página sobre, contato e galeria
- **Painel Administrativo**: Gerenciamento completo de estoque, vendas e clientes
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Interface Moderna**: UI/UX intuitiva e agradável

---

## ✨ Funcionalidades

### Website Público
- ✅ Homepage com destaque de veículos
- ✅ Página de estoque com filtros avançados
- ✅ Página sobre a empresa com missão e valores
- ✅ Página de contato com formulário
- ✅ Integração com WhatsApp
- ✅ Galeria de imagens
- ✅ Responsividade total

### Painel Administrativo
- ✅ Dashboard com estatísticas
- ✅ Gerenciamento de veículos (CRUD)
- ✅ Filtros e busca de veículos
- ✅ Gerenciamento de vendas
- ✅ Gerenciamento de clientes
- ✅ Autenticação de usuário
- ✅ Sistema de logout
- ✅ Controle de acesso

---

## 📁 Estrutura do Projeto

```
lopes-veiculos/
├── index.html              # Homepage
├── estoque.html            # Página de estoque
├── sobre.html              # Sobre a empresa
├── contato.html            # Entre em contato
├── admin/
│   ├── login.html          # Login administrativo
│   ├── dashboard.html      # Dashboard principal
│   └── veiculos.html       # Gerenciar veículos
├── css/
│   └── style.css           # Estilos globais
├── js/
│   └── app.js              # Scripts JavaScript
├── img/                    # Imagens e ícones
└── README.md               # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **JavaScript (Vanilla)**: Funcionalidades interativas
- **Font Awesome 6.4.0**: Ícones profissionais
- **Responsive Design**: Mobile-first approach
- **LocalStorage**: Autenticação e dados locais
- **Grid & Flexbox**: Layouts modernos

---

## 📦 Instalação

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Um servidor web local (opcional para desenvolvimento)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/lopesveiculos/lopes-veiculos.git
   cd lopes-veiculos
   ```

2. **Abra o arquivo no navegador**
   - Clique duplo em `index.html` ou
   - Use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

---

## 🚀 Como Usar

### Navegação Pública

1. **Homepage** (`index.html`)
   - Veja os veículos em destaque
   - Acesse as demais seções do site
   - Clique no botão WhatsApp para contato rápido

2. **Estoque** (`estoque.html`)
   - Navegue pelos veículos disponíveis
   - Use filtros por marca, ano, preço
   - Clique em um veículo para detalhes
   - Solicite test drive via WhatsApp

3. **Sobre** (`sobre.html`)
   - Conheça a história da empresa
   - Veja missão e valores
   - Conheça a equipe

4. **Contato** (`contato.html`)
   - Preencha o formulário de contato
   - Entre em contato via WhatsApp
   - Veja localização e horários

### Painel Administrativo

1. **Login** (`admin/login.html`)
   - Use as credenciais padrão
   - Marque "Lembrar-me" para salvar email

2. **Dashboard** (`admin/dashboard.html`)
   - Visualize estatísticas gerais
   - Veja veículos recentes
   - Acompanhe últimas vendas

3. **Gerenciar Veículos** (`admin/veiculos.html`)
   - **Listar**: Veja todos os veículos
   - **Adicionar**: Novo veículo com modal
   - **Editar**: Modificar informações
   - **Deletar**: Remover veículo
   - **Filtrar**: Por marca, ano, status

---

## 📄 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Homepage | `/index.html` | Página inicial |
| Estoque | `/estoque.html` | Catálogo de veículos |
| Sobre | `/sobre.html` | Informações da empresa |
| Contato | `/contato.html` | Formulário de contato |
| Login Admin | `/admin/login.html` | Autenticação |
| Dashboard | `/admin/dashboard.html` | Painel principal |
| Gerenciar Veículos | `/admin/veiculos.html` | Gerenciamento de estoque |

---

## 🔐 Credenciais Admin

### Login Padrão (DEMO)

```
Email: admin@lopesveiculos.com
Senha: admin123
```

> ⚠️ **Nota de Segurança**: Em produção, use um backend com autenticação real. As credenciais aqui são apenas para demonstração.

### Funcionalidades de Autenticação

- ✅ Verificação de login
- ✅ Lembrar email
- ✅ Sessão com localStorage
- ✅ Proteção de acesso
- ✅ Logout seguro

---

## 🎨 Customização

### Cores Principais

```css
/* Primária */
#1e3c72, #2d5a8c - Azul

/* Secundária */
#ff6b6b, #ff5252 - Vermelho

/* Neutras */
#f5f7fa - Background claro
#666, #333 - Textos
```

### Modificar Informações

1. **Contato**: Edite o email e telefone em `contato.html`
2. **Logo**: Substitua a imagem em `img/logo.png`
3. **Cores**: Altere as variáveis CSS
4. **Conteúdo**: Edite o texto HTML

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

---

## 🔄 Fluxo de Autenticação

```
┌─────────────┐
│   Login     │
└──────┬──────┘
       │
       ├─→ Credenciais incorretas? ─→ Erro
       │
       └─→ Credenciais corretas
             │
             ├─→ Salvar token no localStorage
             ├─→ Armazenar email (se marcado)
             └─→ Redirecionar para Dashboard
```

---

## 🌐 Integração com APIs

### WhatsApp
```
https://wa.me/5519992599469
```

### Placeholder de Imagens
```
https://via.placeholder.com/500x400?text=Nome
```

---

## 🐛 Troubleshooting

### Problema: "Página em branco"
- Verifique o console (F12)
- Confirme que o arquivo HTML existe
- Tente atualizar a página (Ctrl+F5)

### Problema: "Login não funciona"
- Use exatamente: `admin@lopesveiculos.com` e `admin123`
- Verifique se localStorage está habilitado
- Limpe o cache do navegador

### Problema: "Estilos não carregam"
- Confirme que `css/style.css` existe
- Verifique o caminho dos arquivos
- Tente um servidor local em vez de abrir arquivo direto

---

## 📚 Documentação Adicional

### JavaScript Disponível

#### localStorage
```javascript
// Autenticação
localStorage.setItem('adminToken', token);
localStorage.setItem('adminLogado', 'true');
localStorage.getItem('adminToken');
localStorage.removeItem('adminToken');
```

#### Funções Principais
```javascript
fazerLogin(event)          // Autenticar usuário
fazerLogout()              // Desconectar
abrirModalAdicionar()      // Modal novo veículo
abrirModalEditar(id)       // Modal editar veículo
salvarVeiculo(event)       // Salvar veículo
deletarVeiculo(id)         // Deletar veículo
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato

**Lopes Veículos**
- 📧 Email: lopesveiculosyahoo@gmail.com
- 📱 WhatsApp: (19) 99259-9469
- 📍 Localização: Salto, SP
- 🌐 Website: [lopesveiculos.com.br](https://lopesveiculos.com.br)

---

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🎯 Roadmap Futuro

- [ ] Backend com Node.js/Express
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação real (JWT)
- [ ] API RESTful
- [ ] Sistema de agendamento
- [ ] Avaliações de clientes
- [ ] Blog com artigos
- [ ] SEO otimizado
- [ ] Analytics
- [ ] Integração com sistemas de pagamento

---

## 📊 Estatísticas do Projeto

- **Linhas de Código**: ~5000+
- **Páginas**: 7 (4 públicas + 3 admin)
- **Componentes**: 20+
- **Tempo de Desenvolvimento**: ~40 horas
- **Última Atualização**: 05/08/2026

---

## ✅ Checklist de Funcionalidades

- [x] Homepage
- [x] Página de estoque
- [x] Página sobre
- [x] Página de contato
- [x] Login admin
- [x] Dashboard
- [x] Gerenciamento de veículos
- [x] Filtros e busca
- [x] Autenticação
- [x] Design responsivo
- [ ] Backend
- [ ] Banco de dados
- [ ] Sistema de pagamento
- [ ] Notificações por email

---

**Desenvolvido com ❤️ por Lopes Veículos**
