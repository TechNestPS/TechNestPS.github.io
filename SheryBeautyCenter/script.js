document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;

  let message = `مرحباً، أود الانضمام إلى الدورة/التدريب:
  👩‍💼 الاسم: ${name}
  📍 العنوان: ${address}
  📞 الهاتف: ${phone}
  🎂 العمر: ${age}`;

  let url = `https://wa.me/970597889681?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

