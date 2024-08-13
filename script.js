document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('messageForm');
    const titleInput = document.getElementById('title');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const titleError = document.getElementById('titleError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        // إعادة تعيين رسائل الخطأ
        titleError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // التحقق من صحة النموذج
        let isValid = true;

        if (titleInput.value.trim() === '') {
            titleError.textContent = 'Title is required.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            // عرض رسالة النجاح
            confirmationMessage.textContent = 'Message submitted, thanks';
            confirmationMessage.className = 'success';

            // إعادة تعيين الحقول
            form.reset();
        }
    });

    function validateEmail(email) {
        // نمط بسيط للتحقق من صحة البريد الإلكتروني
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
