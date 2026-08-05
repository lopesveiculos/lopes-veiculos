// ==================== DADOS DOS VEÍCULOS ====================
let veiculos = [];

// Carregar dados do JSON
async function carregarVeiculos() {
    try {
        const response = await fetch('data/estoque.json');
        veiculos = await response.json();
        preencherFiltros();
        exibirDestaque();
    } catch (error) {
        console.error('Erro ao carregar veículos:', error);
    }
}

// ==================== FILTROS ====================
function preencherFiltros() {
    const marcas = [...new Set(veiculos.map(v => v.marca))].sort();
    const selectMarca = document.getElementById('marcaFilter');
    
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        selectMarca.appendChild(option);
    });
}

function buscarVeiculos() {
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const marca = document.getElementById('marcaFilter')?.value || '';
    const preco = document.getElementById('precoFilter')?.value || '';

    let filtrados = veiculos.filter(v => {
        const matchSearch = !search || v.modelo.toLowerCase().includes(search) || v.marca.toLowerCase().includes(search);
        const matchMarca = !marca || v.marca === marca;
        const matchPreco = !preco || verificarFaixaPreco(v.preco, preco);
        
        return matchSearch && matchMarca && matchPreco;
    });

    if (document.getElementById('vehiclesContainer')) {
        exibirVeiculos(filtrados);
    } else if (document.getElementById('featuredVehicles')) {
        exibirDestaque();
    }
}

function verificarFaixaPreco(preco, faixa) {
    const [min, max] = faixa.split('-').map(Number);
    return preco >= min && preco <= max;
}

// ==================== EXIBIÇÃO DE VEÍCULOS ====================
function exibirDestaque() {
    const container = document.getElementById('featuredVehicles');
    if (!container) return;

    // Pegar alguns veículos aleatórios para destaque
    const destaque = veiculos.sort(() => 0.5 - Math.random()).slice(0, 6);
    
    container.innerHTML = destaque.map(veiculo => criarCartaoVeiculo(veiculo)).join('');
}

function exibirVeiculos(lista = veiculos) {
    const container = document.getElementById('vehiclesContainer');
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 2rem;">Nenhum veículo encontrado</p>';
        return;
    }

    container.innerHTML = lista.map(veiculo => criarCartaoVeiculo(veiculo)).join('');
}

function criarCartaoVeiculo(v) {
    const linkWhatsApp = `https://wa.me/5519992599469?text=Olá!%20Tenho%20interesse%20no%20${v.marca}%20${v.modelo}%20${v.ano}%20anunciado%20no%20site%20da%20Lopes%20Veículos.%20Preço:%20R$%20${v.preco}`;
    
    return `
        <div class="vehicle-card">
            <img src="${v.imagem || 'https://via.placeholder.com/280x200?text=' + v.marca + '+' + v.modelo}" alt="${v.marca} ${v.modelo}" class="vehicle-image">
            <div class="vehicle-info">
                <div class="vehicle-title">${v.marca} ${v.modelo} ${v.ano}</div>
                <div class="vehicle-price">R$ ${formatarPreco(v.preco)}</div>
                <div class="vehicle-specs">
                    <span class="spec-tag"><i class="fas fa-gas-pump"></i> ${v.combustivel}</span>
                    <span class="spec-tag"><i class="fas fa-cog"></i> ${v.cambio}</span>
                    <span class="spec-tag"><i class="fas fa-tachometer-alt"></i> ${v.km.toLocaleString()} km</span>
                </div>
                <div class="vehicle-actions">
                    <a href="detalhes.html?id=${v.id}" class="btn btn-details">Ver Detalhes</a>
                    <a href="${linkWhatsApp}" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    `;
}

// ==================== FUNÇÕES AUXILIARES ====================
function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ==================== NAVEGAÇÃO MOBILE ====================
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ==================== ATUALIZAR LINKS ATIVOS ==================== 
function atualizarLinksAtivos() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    carregarVeiculos();
    setupMobileMenu();
    atualizarLinksAtivos();

    // Event listeners para filtros
    const searchInput = document.getElementById('searchInput');
    const marcaFilter = document.getElementById('marcaFilter');
    const precoFilter = document.getElementById('precoFilter');

    if (searchInput) searchInput.addEventListener('input', buscarVeiculos);
    if (marcaFilter) marcaFilter.addEventListener('change', buscarVeiculos);
    if (precoFilter) precoFilter.addEventListener('change', buscarVeiculos);
});
