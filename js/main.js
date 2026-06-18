/* ============================================
   CUIABÁ NEWS — Main JavaScript
   Sem chat widget (diferente do Radar Nortão)
   ============================================ */

(function() {
    'use strict';

    // === LOADING SCREEN ===
    window.addEventListener('load', function() {
        var loading = document.getElementById('loading-screen');
        if (loading) loading.classList.add('hidden');
    });

    // === GLOBALS ===
    var currentPage = 1;
    var itemsPerPage = 20;
    var currentCategory = 'todas';
    var currentTab = 'recentes';
    var allNews = typeof noticias !== 'undefined' ? noticias : [];
    var allVideos = typeof videos !== 'undefined' ? videos : [];

    // === INIT ===
    document.addEventListener('DOMContentLoaded', function() {
        initClock();
        initDarkMode();
        initHeroCarousel();
        initTicker();
        initCotacoes();
        initTrending();
        initNewsGrid();
        initCategorySections();
        initVideos();
        initWeather();
        initMaisLidas();
        initSideNews();
        initSearch();
        initNotifications();
        initNavigation();
        initSharePopup();
        initLoadMore();
        initTabs();
        initScrollReveal();
        initReadingProgress();
    });

    // === CLOCK ===
    function initClock() {
        function update() {
            var now = new Date();
            var dateEl = document.getElementById('header-date');
            var clockEl = document.getElementById('header-clock');
            if (dateEl) {
                var dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
                var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
                dateEl.textContent = dias[now.getDay()] + ', ' + now.getDate() + ' de ' + meses[now.getMonth()] + ' de ' + now.getFullYear();
            }
            if (clockEl) {
                clockEl.textContent = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
            }
        }
        update();
        setInterval(update, 1000);
    }

    // === DARK MODE ===
    function initDarkMode() {
        var btn = document.getElementById('btn-dark-mode');
        var saved = localStorage.getItem('cuiabanews-theme');
        if (saved) document.documentElement.setAttribute('data-theme', saved);

        if (btn) {
            btn.addEventListener('click', function() {
                var current = document.documentElement.getAttribute('data-theme');
                var next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('cuiabanews-theme', next);
                btn.querySelector('.material-icons').textContent = next === 'dark' ? 'light_mode' : 'dark_mode';
            });
            var theme = document.documentElement.getAttribute('data-theme');
            btn.querySelector('.material-icons').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    }

    // === HERO CAROUSEL ===
    function initHeroCarousel() {
        var container = document.getElementById('hero-carousel');
        var dotsContainer = document.getElementById('hero-dots');
        if (!container || !allNews.length) return;

        var destaques = allNews.filter(function(n) { return n.destaque; });
        if (destaques.length === 0) destaques = allNews.slice(0, 5);

        var cats = typeof CATEGORIAS !== 'undefined' ? CATEGORIAS : {};

        destaques.forEach(function(n, i) {
            var catInfo = cats[n.categoria] || {nome: n.categoria};
            var slide = document.createElement('div');
            slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
            slide.innerHTML =
                '<img src="' + n.imagem + '" alt="' + escapeHtml(n.titulo) + '" loading="lazy">' +
                '<div class="hero-slide-overlay">' +
                    '<span class="hero-slide-category">' + escapeHtml(catInfo.nome || n.categoria) + '</span>' +
                    '<h2 class="hero-slide-title">' + escapeHtml(n.titulo) + '</h2>' +
                    '<span class="hero-slide-meta">' + escapeHtml(n.autor) + ' &bull; ' + n.tempo + '</span>' +
                '</div>';
            slide.style.cursor = 'pointer';
            slide.addEventListener('click', function() { window.location.href = 'noticia.html?id=' + n.id; });
            container.appendChild(slide);

            var dot = document.createElement('span');
            dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('data-index', i);
            dotsContainer.appendChild(dot);
        });

        var currentSlide = 0;
        var slides = container.querySelectorAll('.hero-slide');
        var dots = dotsContainer.querySelectorAll('.hero-dot');

        function goTo(idx) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = idx;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                goTo(parseInt(this.getAttribute('data-index')));
            });
        });

        var prevBtn = document.getElementById('hero-prev');
        var nextBtn = document.getElementById('hero-next');
        if (prevBtn) prevBtn.addEventListener('click', function() {
            goTo((currentSlide - 1 + slides.length) % slides.length);
        });
        if (nextBtn) nextBtn.addEventListener('click', function() {
            goTo((currentSlide + 1) % slides.length);
        });

        setInterval(function() {
            goTo((currentSlide + 1) % slides.length);
        }, 6000);
    }

    // === TICKER ===
    function initTicker() {
        var content = document.getElementById('ticker-content');
        if (!content) return;
        var items = typeof breakingNews !== 'undefined' ? breakingNews : [];
        if (!items.length) {
            var bar = document.getElementById('ticker-bar');
            if (bar) bar.style.display = 'none';
            return;
        }
        content.innerHTML = items.map(function(b) {
            return '<span>' + escapeHtml(b) + '</span>';
        }).join(' &bull; ');
    }

    // === COTAÇÕES ===
    function initCotacoes() {
        var scroll = document.getElementById('cotacoes-scroll');
        if (!scroll) return;
        var items = typeof cotacoes !== 'undefined' ? cotacoes : [];
        if (!items.length) {
            var strip = document.getElementById('cotacoes-strip');
            if (strip) strip.style.display = 'none';
            return;
        }
        scroll.innerHTML = items.map(function(c) {
            return '<div class="cotacao-item">' +
                '<span class="material-icons">' + c.icone + '</span>' +
                '<span class="cotacao-nome">' + escapeHtml(c.nome) + '</span>' +
                '<span class="cotacao-valor">' + escapeHtml(c.valor) + '</span>' +
                '<span class="cotacao-var ' + c.direcao + '">' + escapeHtml(c.variacao) + '</span>' +
            '</div>';
        }).join('');
    }

    // === TRENDING ===
    function initTrending() {
        var container = document.getElementById('trending-tags');
        if (!container) return;
        var items = typeof trending !== 'undefined' ? trending : [];
        if (!items.length) {
            var section = document.getElementById('trending-section');
            if (section) section.style.display = 'none';
            return;
        }
        container.innerHTML = items.map(function(t) {
            return '<span class="trending-tag">' + escapeHtml(t) + '</span>';
        }).join('');
    }

    // === NEWS GRID ===
    function initNewsGrid() {
        renderNews();
    }

    function renderNews() {
        var grid = document.getElementById('news-grid');
        if (!grid) return;

        var filtered = currentCategory === 'todas' ? allNews : allNews.filter(function(n) { return n.categoria === currentCategory; });

        if (currentTab === 'mais-lidas') {
            filtered = filtered.slice().sort(function() { return 0.5 - Math.random(); });
        }

        var toShow = filtered.slice(0, currentPage * itemsPerPage);
        var cats = typeof CATEGORIAS !== 'undefined' ? CATEGORIAS : {};

        grid.innerHTML = toShow.map(function(n, i) {
            var catInfo = cats[n.categoria] || {nome: n.categoria};
            return '<article class="news-card reveal" data-id="' + n.id + '">' +
                '<div class="news-card-image">' +
                    '<img src="' + n.imagem + '" alt="' + escapeHtml(n.titulo) + '" loading="lazy">' +
                    '<span class="news-card-category">' + escapeHtml(catInfo.nome || n.categoria) + '</span>' +
                    '<button class="news-card-share" data-title="' + escapeHtml(n.titulo) + '"><span class="material-icons">share</span></button>' +
                '</div>' +
                '<div class="news-card-body">' +
                    '<h3 class="news-card-title">' + escapeHtml(n.titulo) + '</h3>' +
                    '<p class="news-card-excerpt">' + escapeHtml(n.resumo || '') + '</p>' +
                    '<div class="news-card-meta"><span class="author">' + escapeHtml(n.autor) + '</span><span>' + n.tempo + '</span></div>' +
                '</div>' +
            '</article>';
        }).join('');

        var loadMore = document.getElementById('btn-load-more');
        if (loadMore) {
            loadMore.style.display = toShow.length < filtered.length ? 'flex' : 'none';
        }

        attachCardEvents(grid);
        triggerReveal();
    }

    function attachCardEvents(container) {
        container.querySelectorAll('.news-card-share').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var title = this.getAttribute('data-title');
                openShare(title);
            });
        });

        container.querySelectorAll('.news-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                var n = allNews.find(function(item) { return item.id == id; });
                if (n) window.location.href = 'noticia.html?id=' + n.id;
            });
        });
    }

    // === CATEGORY SECTIONS ===
    function initCategorySections() {
        var categories = ['politica', 'economia', 'cidade', 'esportes', 'brasil', 'internacional', 'eventos'];
        var cats = typeof CATEGORIAS !== 'undefined' ? CATEGORIAS : {};
        var idsUsados = {};
        allNews.slice(0, itemsPerPage).forEach(function(n) { idsUsados[n.id] = true; });

        categories.forEach(function(cat) {
            var grid = document.querySelector('.category-grid[data-category="' + cat + '"]');
            if (!grid) return;

            var items = allNews.filter(function(n) { return n.categoria === cat && !idsUsados[n.id]; }).slice(0, 4);
            if (!items.length) {
                var section = document.getElementById('section-' + cat);
                if (section) section.style.display = 'none';
                return;
            }

            grid.innerHTML = items.map(function(n) {
                var catInfo = cats[n.categoria] || {nome: n.categoria};
                return '<article class="news-card reveal" data-id="' + n.id + '">' +
                    '<div class="news-card-image">' +
                        '<img src="' + n.imagem + '" alt="' + escapeHtml(n.titulo) + '" loading="lazy">' +
                        '<span class="news-card-category">' + escapeHtml(catInfo.nome || cat) + '</span>' +
                    '</div>' +
                    '<div class="news-card-body">' +
                        '<h3 class="news-card-title">' + escapeHtml(n.titulo) + '</h3>' +
                        '<p class="news-card-excerpt">' + escapeHtml(n.resumo || '') + '</p>' +
                        '<div class="news-card-meta"><span class="author">' + escapeHtml(n.autor) + '</span><span>' + n.tempo + '</span></div>' +
                    '</div>' +
                '</article>';
            }).join('');

            attachCardEvents(grid);
        });
    }

    // === VIDEOS ===
    function initVideos() {
        var grid = document.getElementById('videos-grid');
        if (!grid || !allVideos.length) return;

        grid.innerHTML = allVideos.map(function(v) {
            return '<div class="video-card" data-video-id="' + v.videoId + '" data-title="' + escapeHtml(v.titulo) + '">' +
                '<img src="' + v.thumb + '" alt="' + escapeHtml(v.titulo) + '" loading="lazy">' +
                '<div class="video-card-overlay">' +
                    '<div class="video-card-play"><span class="material-icons">play_arrow</span></div>' +
                    '<span class="video-card-title">' + escapeHtml(v.titulo) + '</span>' +
                '</div>' +
                '<span class="video-card-duration">' + v.duracao + '</span>' +
            '</div>';
        }).join('');

        grid.querySelectorAll('.video-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var videoId = this.getAttribute('data-video-id');
                var title = this.getAttribute('data-title');
                openVideoModal(videoId, title);
            });
        });
    }

    function openVideoModal(videoId, title) {
        var modal = document.getElementById('video-modal');
        var player = document.getElementById('video-modal-player');
        var titleEl = document.getElementById('video-modal-title');
        if (!modal || !player) return;

        player.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" allowfullscreen allow="autoplay"></iframe>';
        if (titleEl) titleEl.textContent = title;
        modal.classList.add('active');
    }

    document.addEventListener('click', function(e) {
        if (e.target && (e.target.id === 'video-modal-close' || e.target.closest('#video-modal-close'))) {
            var modal = document.getElementById('video-modal');
            var player = document.getElementById('video-modal-player');
            if (modal) modal.classList.remove('active');
            if (player) player.innerHTML = '';
        }
        if (e.target && e.target.id === 'video-modal') {
            var modal2 = document.getElementById('video-modal');
            var player2 = document.getElementById('video-modal-player');
            if (modal2) modal2.classList.remove('active');
            if (player2) player2.innerHTML = '';
        }
    });

    // === WEATHER ===
    function initWeather() {
        var content = document.getElementById('weather-content');
        if (!content) return;
        var c = typeof clima !== 'undefined' ? clima : null;
        if (!c) {
            content.innerHTML = '<p style="opacity:0.6">Clima indisponível</p>';
            return;
        }

        content.innerHTML =
            '<div class="weather-main">' +
                '<div class="weather-temp">' + c.temperatura + '°</div>' +
                '<div class="weather-icon"><span class="material-icons">' + (c.icone || 'wb_sunny') + '</span></div>' +
            '</div>' +
            '<div class="weather-desc">' + escapeHtml(c.condicao || c.descricao || '') + ' em ' + escapeHtml(c.cidade || 'Cuiabá') + '</div>' +
            '<div class="weather-details">' +
                '<div class="weather-detail"><span class="material-icons">thermostat</span> Mín ' + (c.temp_min || '--') + '° / Máx ' + (c.temp_max || '--') + '°</div>' +
                '<div class="weather-detail"><span class="material-icons">water_drop</span> Umidade ' + (c.umidade || '--') + '%</div>' +
                '<div class="weather-detail"><span class="material-icons">air</span> Vento ' + (c.vento || c.vento_kmh || '--') + ' km/h</div>' +
            '</div>';
    }

    // === MAIS LIDAS ===
    function initMaisLidas() {
        var list = document.getElementById('mais-lidas-list');
        if (!list || !allNews.length) return;

        var top5 = allNews.slice(0, 5);
        list.innerHTML = top5.map(function(n, i) {
            return '<div class="mais-lidas-item" data-id="' + n.id + '">' +
                '<span class="mais-lidas-rank">' + (i + 1) + '</span>' +
                '<div>' +
                    '<div class="mais-lidas-title">' + escapeHtml(n.titulo) + '</div>' +
                    '<div class="mais-lidas-meta">' + n.tempo + '</div>' +
                '</div>' +
            '</div>';
        }).join('');

        list.querySelectorAll('.mais-lidas-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                var n = allNews.find(function(x) { return x.id == id; });
                if (n) window.location.href = 'noticia.html?id=' + n.id;
            });
        });
    }

    // === SIDE NEWS ===
    function initSideNews() {
        var el = document.getElementById('side-news-items');
        if (!el || !allNews.length) return;
        var cats = typeof CATEGORIAS !== 'undefined' ? CATEGORIAS : {};
        var sideItems = allNews.slice(itemsPerPage, itemsPerPage + 15);
        el.innerHTML = sideItems.map(function(n) {
            var ci = cats[n.categoria] || {nome: n.categoria};
            return '<div class="side-news-item" data-id="' + n.id + '">' +
                '<div class="side-news-thumb"><img src="' + n.imagem + '" alt="" loading="lazy"></div>' +
                '<div class="side-news-info">' +
                '<div class="side-news-cat">' + escapeHtml(ci.nome || n.categoria) + '</div>' +
                '<div class="side-news-title">' + escapeHtml(n.titulo) + '</div>' +
                '<div class="side-news-meta">' + escapeHtml(n.autor) + ' &bull; ' + n.tempo + '</div>' +
                '</div></div>';
        }).join('');
        el.querySelectorAll('.side-news-item').forEach(function(item) {
            item.addEventListener('click', function() { window.location.href = 'noticia.html?id=' + this.getAttribute('data-id'); }.bind(item));
        });
    }

    // === SEARCH ===
    function initSearch() {
        var btn = document.getElementById('btn-search');
        var overlay = document.getElementById('search-overlay');
        var close = document.getElementById('search-close');
        var input = document.getElementById('search-input');
        var results = document.getElementById('search-results');

        if (!btn || !overlay) return;

        btn.addEventListener('click', function() {
            overlay.classList.add('active');
            setTimeout(function() { if (input) input.focus(); }, 100);
        });

        if (close) close.addEventListener('click', function() { overlay.classList.remove('active'); });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) overlay.classList.remove('active');
        });

        if (input && results) {
            input.addEventListener('input', function() {
                var q = this.value.toLowerCase().trim();
                if (q.length < 2) { results.innerHTML = ''; return; }

                var found = allNews.filter(function(n) {
                    return n.titulo.toLowerCase().indexOf(q) !== -1 ||
                           (n.resumo && n.resumo.toLowerCase().indexOf(q) !== -1);
                }).slice(0, 8);

                results.innerHTML = found.map(function(n) {
                    return '<div class="search-result-item" data-id="' + n.id + '">' +
                        '<h4>' + escapeHtml(n.titulo) + '</h4>' +
                        '<p>' + escapeHtml(n.autor) + ' &bull; ' + n.tempo + '</p>' +
                    '</div>';
                }).join('') || '<div class="search-result-item"><h4>Nenhum resultado</h4></div>';

                results.querySelectorAll('.search-result-item[data-id]').forEach(function(item) {
                    item.addEventListener('click', function() {
                        var id = this.getAttribute('data-id');
                        var n = allNews.find(function(x) { return x.id == id; });
                        if (n) { overlay.classList.remove('active'); window.location.href = 'noticia.html?id=' + n.id; }
                    });
                });
            });
        }
    }

    // === NOTIFICATIONS ===
    function initNotifications() {
        var btn = document.getElementById('btn-notifications');
        var dropdown = document.getElementById('notifications-dropdown');
        var list = document.getElementById('notifications-list');
        var badge = document.getElementById('notification-badge');
        var clear = document.getElementById('notifications-clear');

        if (!btn || !dropdown) return;

        var notifs = allNews.slice(0, 5).map(function(n) {
            return {titulo: n.titulo, tempo: n.tempo};
        });

        if (badge) badge.textContent = notifs.length;

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && e.target !== btn) {
                dropdown.classList.remove('active');
            }
        });

        if (list) {
            list.innerHTML = notifs.map(function(n) {
                return '<div class="notification-item">' +
                    '<div>' + escapeHtml(n.titulo) + '</div>' +
                    '<div class="time">' + n.tempo + '</div>' +
                '</div>';
            }).join('');
        }

        if (clear) {
            clear.addEventListener('click', function() {
                if (list) list.innerHTML = '<div class="notification-item"><div>Nenhuma notificação</div></div>';
                if (badge) badge.textContent = '0';
            });
        }
    }

    // === NAVIGATION ===
    function initNavigation() {
        document.querySelectorAll('.nav-link[data-category]').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
                this.classList.add('active');
                currentCategory = this.getAttribute('data-category');
                currentPage = 1;
                renderNews();
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        });

        document.querySelectorAll('.ver-mais').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var cat = this.getAttribute('data-category');
                document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
                var navLink = document.querySelector('.nav-link[data-category="' + cat + '"]');
                if (navLink) navLink.classList.add('active');
                currentCategory = cat;
                currentPage = 1;
                renderNews();
                var section = document.getElementById('ultimas-section');
                if (section) section.scrollIntoView({behavior: 'smooth'});
            });
        });

        document.querySelectorAll('.footer-links a[data-category]').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var cat = this.getAttribute('data-category');
                document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
                var navLink = document.querySelector('.nav-link[data-category="' + cat + '"]');
                if (navLink) navLink.classList.add('active');
                currentCategory = cat;
                currentPage = 1;
                renderNews();
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        });
    }

    // === SHARE ===
    function initSharePopup() {
        var popup = document.getElementById('share-popup');
        var close = document.getElementById('share-close');

        if (close) close.addEventListener('click', function() { popup.classList.remove('active'); });
        if (popup) popup.addEventListener('click', function(e) { if (e.target === popup) popup.classList.remove('active'); });

        document.querySelectorAll('.share-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var platform = this.getAttribute('data-platform');
                var title = popup.getAttribute('data-title') || 'CUIABÁ NEWS';
                var url = window.location.href;

                if (platform === 'whatsapp') window.open('https://wa.me/?text=' + encodeURIComponent(title + ' - ' + url));
                else if (platform === 'twitter') window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url));
                else if (platform === 'facebook') window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
                else if (platform === 'copy') {
                    navigator.clipboard.writeText(title + ' - ' + url).then(function() { showToast('Link copiado!'); });
                }
                popup.classList.remove('active');
            });
        });
    }

    function openShare(title) {
        var popup = document.getElementById('share-popup');
        if (popup) {
            popup.setAttribute('data-title', title);
            popup.classList.add('active');
        }
    }

    // === LOAD MORE ===
    function initLoadMore() {
        var btn = document.getElementById('btn-load-more');
        if (btn) {
            btn.addEventListener('click', function() {
                currentPage++;
                renderNews();
            });
        }
    }

    // === TABS ===
    function initTabs() {
        document.querySelectorAll('.tab-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                currentTab = this.getAttribute('data-tab');
                currentPage = 1;
                renderNews();
            });
        });
    }


    // === SCROLL REVEAL ===
    function initScrollReveal() {
        triggerReveal();
        window.addEventListener('scroll', triggerReveal);
    }

    function triggerReveal() {
        document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
            var top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }

    // === READING PROGRESS ===
    function initReadingProgress() {
        var bar = document.getElementById('reading-progress');
        if (!bar) return;
        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = progress + '%';
        });
    }


    // === TOAST ===
    function showToast(msg) {
        var container = document.getElementById('toast-container');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(function() {
            toast.classList.add('hide');
            setTimeout(function() { toast.remove(); }, 300);
        }, 3000);
    }

    // === ESCAPE HTML ===
    function escapeHtml(text) {
        if (!text) return '';
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }

})();
