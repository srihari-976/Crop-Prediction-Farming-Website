document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetForm = button.getAttribute('data-tab');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding form
            if (targetForm === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
            }
        });
    });

    // Toggle password visibility
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const icon = button.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Form validation and submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        try {
            // Add loading state
            const submitButton = loginForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Here you would typically make an API call to authenticate
            console.log('Login attempt:', { email, password });
            
            // Redirect on success
            window.location.href = './index.html';
            
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const phone = document.getElementById('registerPhone').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        try {
            // Add loading state
            const submitButton = registerForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Here you would typically make an API call to register
            console.log('Registration attempt:', { name, email, phone, password });
            
            // Show success message and switch to login
            alert('Registration successful! Please log in.');
            tabButtons[0].click(); // Switch to login tab
            
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    });

    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(button => {
        button.addEventListener('click', () => {
            const provider = button.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`${provider} login is not implemented in this demo.`);
        });
    });

    // Password strength indicator
    const registerPassword = document.getElementById('registerPassword');
    registerPassword.addEventListener('input', () => {
        const password = registerPassword.value;
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength++;
        
        // Contains number
        if (/\d/.test(password)) strength++;
        
        // Contains letter
        if (/[a-zA-Z]/.test(password)) strength++;
        
        // Contains special character
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        // Update password field border color based on strength
        const colors = ['#ff4444', '#ffbb33', '#00C851', '#007E33'];
        registerPassword.style.borderColor = colors[strength - 1] || '#eee';
    });
}); 