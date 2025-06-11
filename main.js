/**
 * Modern Blog - Main JavaScript
 */

// DOM elements
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const featuredArticlesContainer = document.getElementById('featured-articles');
const latestArticlesContainer = document.getElementById('latest-articles');
const readingProgress = document.getElementById('readingProgress');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');

// Theme management
const initTheme = () => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (prefersDarkScheme.matches) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
};

const toggleTheme = () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Article rendering
const createArticleCard = (article) => {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.setAttribute('data-animate', 'fade-up');
    
    card.innerHTML = `
        <div class="article-img">
            <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="article-content">
            <span class="article-category">${article.category}</span>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <div class="article-author">
                    <div class="author-avatar">
                        <img src="${article.author.avatar}" alt="${article.author.name}">
                    </div>
                    <span>${article.author.name}</span>
                </div>
                <div class="article-date">${article.date}</div>
            </div>
        </div>
    `;
    
    return card;
};

const loadArticles = () => {
    // Remove skeleton loaders
    if (featuredArticlesContainer) {
        featuredArticlesContainer.innerHTML = '';
        
        // Load featured articles
        articleData.featured.forEach(article => {
            featuredArticlesContainer.appendChild(createArticleCard(article));
        });
    }
    
    // Load latest articles
    if (latestArticlesContainer) {
        articleData.latest.forEach(article => {
            latestArticlesContainer.appendChild(createArticleCard(article));
        });
    }
    
    // Initialize animations after articles are loaded
    initAnimations();
};

// Scroll animations
const initAnimations = () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
};

// Reading progress
const updateReadingProgress = () => {
    const docElement = document.documentElement;
    const winScroll = docElement.scrollTop || body.scrollTop;
    const height = docElement.scrollHeight - docElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    readingProgress.style.width = scrolled + '%';
};

// Newsletter functionality
const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (!email || !email.includes('@')) {
        newsletterMessage.textContent = 'Please enter a valid email address.';
        newsletterMessage.className = 'message-error';
        return;
    }
    
    // Simulate form submission (in a real app, this would be an API call)
    newsletterMessage.textContent = 'Thank you for subscribing!';
    newsletterMessage.className = 'message-success';
    
    // Reset form
    document.getElementById('email').value = '';
    
    // Clear success message after 3 seconds
    setTimeout(() => {
        newsletterMessage.textContent = '';
    }, 3000);
};

// Initialization function
const init = () => {
    // Initialize theme
    initTheme();
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    window.addEventListener('scroll', updateReadingProgress);
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Simulate loading delay for demo purposes
    setTimeout(() => {
        loadArticles();
    }, 1000);
};

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init); 