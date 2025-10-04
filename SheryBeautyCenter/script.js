document.getElementById("joinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;

    let message = `مرحباً شيرين، أود الانضمام إلى الدورة/التدريب التخصصي:
👩‍💼 الاسم: ${name}
📍 العنوان/المدينة: ${address}
📞 الهاتف: ${phone}
🎂 العمر: ${age}
---
برجاء التواصل معي لتأكيد التفاصيل.`;

    // رقم الواتساب الخاص بك
    let whatsappNumber = '970597889681'; 

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});
