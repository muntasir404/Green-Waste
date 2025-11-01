document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // পেজ রিফ্রেশ বন্ধ করে

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ফিল্ড ফাঁকা থাকলে পপ-আপ বার্তা
    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields");
        return;
    }

    // সব ঠিক থাকলে login page এ রিডাইরেক্ট
    window.location.href = "index.html";
});
