
        // Enhanced shopping cart functionality
        document.addEventListener('DOMContentLoaded', function() {
            const buyButtons = document.querySelectorAll('.buy-btn');
            const cartCount = document.querySelector('.cart-count');
            const collectionButtons = document.querySelectorAll('.collection-btn');
            let count = 5; // Starting count
            
            // Add to cart functionality
            buyButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    if (this.textContent.includes('ADD TO CART') || this.textContent.includes('RESERVE NOW')) {
                        e.preventDefault();
                        count++;
                        cartCount.textContent = count;
                        
                        // Add visual feedback
                        const originalText = this.textContent;
                        this.textContent = '✓ ADDED TO CART';
                        this.style.backgroundColor = '#28a745';
                        
                        setTimeout(() => {
                            this.textContent = originalText;
                            this.style.backgroundColor = '';
                        }, 2000);
                    }
                });
            });
            
            // Collection filter buttons
            collectionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    collectionButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // In a real implementation, this would filter products
                    // For now, just show a message
                    const collectionName = this.textContent;
                    console.log(`Filtering by: ${collectionName}`);
                });
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('.newsletter-input');
                const submitBtn = this.querySelector('.newsletter-btn');
                
                if (emailInput.value) {
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'THANK YOU!';
                    submitBtn.style.backgroundColor = '#28a745';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.backgroundColor = '';
                        emailInput.value = '';
                    }, 3000);
                }
            });
            
            // Scroll animation for fade-in elements
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            // Observe all elements with the fade-in class
            document.querySelectorAll('.product-card, .testimonial-card, .featured-content, .newsletter-content, .philosophy-content').forEach(el => {
                observer.observe(el);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a, .buy-btn[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
            
            // Image error handling
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', function() {
                    // If image fails to load, show a placeholder
                    this.style.display = 'none';
                    const parent = this.parentElement;
                    parent.innerHTML = `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, #f5f3ef, #e8e4dc); color: #d4af37; font-weight: bold; font-size: 18px;">PREMIUM TIMEPIECE</div>`;
                });
            });
            
            // Preload important images
            function preloadImage(url) {
                const img = new Image();
                img.src = url;
            }
            
            // Preload hero image
            preloadImage('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
            
            // Show loading indicator while images load
            document.querySelectorAll('.product-img, .hero-image, .featured-image').forEach(el => {
                el.classList.add('loading');
            });
            
            // Remove loading class when images are loaded
            window.addEventListener('load', function() {
                setTimeout(() => {
                    document.querySelectorAll('.product-img, .hero-image, .featured-image').forEach(el => {
                        el.classList.remove('loading');
                    });
                }, 500);
            });
        });