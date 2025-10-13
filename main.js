// =============================================
// SISTEMA DE MODAL SIMPLES
// =============================================
window.abrirModal = function(tipo) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Definir conteúdo baseado no tipo
    const conteudos = {
        contato: {
            titulo: 'Entre em Contato',
            conteudo: `
                <div class="contact-info">
                    <p>Ficaremos felizes em responder suas dúvidas sobre o E-Book "Venda Sem Gastar Um Centavo".</p>
                </div>
                
                <div class="contact-info">
                    <p>Entre em contato conosco pelo Direct do Instagram:</p>
                    <div class="instagram-handle">@seu_empreendedor_onlinebr</div>
                </div>

                <div class="contact-info">
                    <p>Respondemos todas as mensagens em até 24 horas.</p>
                </div>

                <div class="contact-info">
                    <p>Para questões sobre compra, entrega do E-Book ou garantia, utilize sempre o Direct do Instagram para termos um histórico da conversa.</p>
                </div>
            `
        },
        termos: {
            titulo: 'Termos de Uso',
            conteudo: `
                <div class="terms-section">
                    <h4>1. Licença de Uso</h4>
                    <p>Ao adquirir este e-book digital, você recebe uma licença individual e intransferível para uso pessoal.</p>
                </div>

                <div class="terms-section">
                    <h4>2. Propriedade Intelectual</h4>
                    <p>Todo o conteúdo do e-book é propriedade intelectual do autor. É proibida a reprodução, distribuição ou revenda do material.</p>
                </div>

                <div class="terms-section">
                    <h4>3. Garantia</h4>
                    <p>Oferecemos garantia de 7 dias conforme descrito na página de vendas do e-book.</p>
                </div>

                <div class="terms-section">
                    <h4>4. Limitações</h4>
                    <p>Não garantimos resultados específicos, pois estes dependem da aplicação e esforço do comprador.</p>
                </div>
            `
        },
        privacidade: {
            titulo: 'Política de Privacidade',
            conteudo: `
                <div class="privacy-section">
                    <h4>Seus dados estão seguros conosco</h4>
                    <p>Levamos a privacidade a sério e seguimos as melhores práticas de segurança.</p>
                </div>

                <div class="privacy-section">
                    <h4>Dados Coletados</h4>
                    <ul>
                        <li>Nome e e-mail para entrega do e-book</li>
                        <li>Dados de pagamento (processados pela Kiwify)</li>
                        <li>Histórico de suporte (quando necessário)</li>
                    </ul>
                </div>

                <div class="privacy-section">
                    <h4>Como usamos seus dados</h4>
                    <ul>
                        <li>Para entrega do e-book digital</li>
                        <li>Para suporte ao cliente</li>
                        <li>Para comunicações importantes sobre o produto</li>
                    </ul>
                </div>

                <div class="privacy-section">
                    <h4>Seus direitos</h4>
                    <p>Você pode solicitar a exclusão de seus dados a qualquer momento através do nosso contato no Instagram.</p>
                </div>
            `
        }
    };

    const conteudo = conteudos[tipo] || {
        titulo: 'Informações',
        conteudo: '<p>Conteúdo não disponível no momento.</p>'
    };

    // Aplicar conteúdo ao modal
    modalTitle.textContent = conteudo.titulo;
    modalBody.innerHTML = conteudo.conteudo;
    
    // Mostrar modal
    modal.style.display = 'block';
    
    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
}

window.fecharModal = function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// =============================================
// MENU MOBILE SIMPLES
// =============================================
window.toggleMenu = function() {
    const menuMobile = document.getElementById('menuMobile');
    const isOpen = menuMobile.getAttribute('data-open') === 'true';
    
    if (isOpen) {
        fecharMenu();
    } else {
        abrirMenu();
    }
}

function abrirMenu() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.innerHTML = '✕';
    menuMobile.setAttribute('data-open', 'true');
    
    // Criar overlay do menu
    const overlay = document.createElement('div');
    overlay.className = 'nav-mobile-overlay';
    overlay.innerHTML = `
        <div class="nav-mobile">
            <div class="nav-mobile-header">
                <span>Navegação</span>
                <button onclick="fecharMenu()">×</button>
            </div>
            <div class="nav-mobile-links">
                <a href="#home" onclick="fecharMenu()">
                    <i class="fas fa-home"></i> Início
                </a>
                <a href="#beneficios" onclick="fecharMenu()">
                    <i class="fas fa-book"></i> Conteúdo
                </a>
                <a href="#depoimentos" onclick="fecharMenu()">
                    <i class="fas fa-comments"></i> Depoimentos
                </a>
                <a href="#garantia" onclick="fecharMenu()">
                    <i class="fas fa-shield-alt"></i> Garantia
                </a>
                <a href="#faq" onclick="fecharMenu()">
                    <i class="fas fa-question-circle"></i> FAQ
                </a>
                <a href="https://pay.kiwify.com.br/f5db9DM" target="_blank" class="nav-mobile-cta" onclick="fecharMenu()">
                    <i class="fas fa-shopping-cart"></i> Comprar E-book
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

window.fecharMenu = function() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.innerHTML = '☰';
    menuMobile.setAttribute('data-open', 'false');
    
    const overlay = document.querySelector('.nav-mobile-overlay');
    if (overlay) {
        overlay.remove();
    }
    
    document.body.style.overflow = 'auto';
}

// =============================================
// SCROLL SUAVE
// =============================================
function inicializarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '#home') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// INTERATIVIDADE DO E-BOOK
// =============================================
function inicializarEbook3D() {
    const ebook3d = document.querySelector('.ebook-3d');
    if (!ebook3d) return;

    ebook3d.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        ebook3d.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    ebook3d.addEventListener('mouseenter', () => {
        ebook3d.style.transition = 'none';
    });

    ebook3d.addEventListener('mouseleave', () => {
        ebook3d.style.transition = 'all 0.5s ease';
        ebook3d.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
}

// =============================================
// ANIMAÇÕES DE SCROLL
// =============================================
function inicializarAnimacoesScroll() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar elementos para animação
        document.querySelectorAll('.benefit, .testi, .card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// =============================================
// FECHAR MODAL CLICANDO FORA
// =============================================
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        fecharModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharModal();
        fecharMenu();
    }
});

// =============================================
// INICIALIZAÇÃO
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar scroll suave
    inicializarScrollSuave();
    
    // Inicializar animações
    inicializarAnimacoesScroll();
    
    // Inicializar efeito 3D do ebook
    inicializarEbook3D();
    
    // Inicializar menu mobile
    const menuMobile = document.getElementById('menuMobile');
    if (menuMobile) {
        menuMobile.setAttribute('data-open', 'false');
        menuMobile.addEventListener('click', toggleMenu);
    }
    
    console.log('🚀 Página inicializada com sucesso!');
});

// =============================================
// ANIMAÇÃO DAS COMPRAS EM TEMPO REAL
// =============================================
function animarComprasTempoReal() {
    const purchaseItems = document.querySelectorAll('.purchase-item');
    if (purchaseItems.length === 0) return;

    setInterval(() => {
        purchaseItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0.5';
                item.style.transform = 'translateX(-10px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 300);
            }, index * 200);
        });
    }, 5000);
}

// Iniciar animação das compras
setTimeout(animarComprasTempoReal, 2000);










