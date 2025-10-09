// WhatsApp Form Handler (Optimized for Contact Page HTML)
document.getElementById('whatsappForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // استدعاء القيم من الحقول المحدثة
    const name = document.getElementById('wa-name').value.trim();
    const phone = document.getElementById('wa-phone').value.trim();
    const message = document.getElementById('wa-message').value.trim();

    // رقم الهاتف المستهدف (فرع أبو ديس - يمكن تغييره حسب الرغبة)
    const targetNumber = '972599190124'; 

    // تهيئة الرسالة لتكون واضحة واحترافية
    // استخدام \n لإنشاء سطر جديد (يتم ترميزه تلقائيًا)
    const fullMessage = `Hello, my name is ${name}. 
My phone number is: ${phone}.

My inquiry is:\n${message}`;

    // ترميز الرسالة لاستخدامها في الرابط
    const encodedMessage = encodeURIComponent(fullMessage);

    // بناء رابط واتساب
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
});