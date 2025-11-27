// AOS 초기화 - 스크롤 애니메이션
AOS.init({
  duration: 400, // 더 빠른 애니메이션
  once: true, // 한 번만 실행 (더 부드러움)
  offset: 120, // 더 빨리 시작
  easing: "ease-out-cubic",
  delay: 0,
});

// 네비게이션 스크롤 이펙트
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 모바일 메뉴 토글
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// 링크 클릭 시 메뉴 닫기
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // href가 "#"만 있거나 비어있으면 스킵
    if (!href || href === "#") {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    try {
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error("Invalid selector:", href);
    }
  });
});

// 제품 슬라이더 - Swiper
const productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 600,
  // autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// 문의 폼 - EmailJS
(function () {
  emailjs.init("a7uxRw8K7_lp0hm9L"); // EmailJS Public Key
})();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const privacy = document.getElementById("privacy").checked;

    if (!privacy) {
      const privacyMsg =
        currentLanguage === "ko"
          ? "개인정보 수집 및 이용에 동의해주세요."
          : currentLanguage === "en"
          ? "Please agree to the collection and use of personal information."
          : "请同意收集和使用个人信息。";
      alert(privacyMsg);
      return;
    }

    // 전송 중 표시
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.querySelector(".btn-text").textContent;
    submitBtn.querySelector(".btn-text").textContent = currentLanguage === "ko" ? "전송 중..." : currentLanguage === "en" ? "Sending..." : "发送中...";
    submitBtn.disabled = true;

    // 이메일 전송
    emailjs
      .sendForm("service_wy0bc3h", "template_synj1s4", contactForm)
      .then(
        function (response) {
          const successMsg =
            currentLanguage === "ko"
              ? "문의가 성공적으로 전송되었습니다!\n빠른 시일 내에 연락드리겠습니다."
              : currentLanguage === "en"
              ? "Your inquiry has been sent successfully!\nWe will contact you soon."
              : "咨询已成功发送！\n我们将尽快与您联系。";
          alert(successMsg);

          // 폼 초기화
          contactForm.reset();
        },
        function (error) {
          const errorMsg =
            currentLanguage === "ko" ? "전송 중 오류가 발생했습니다.\n다시 시도해주세요." : currentLanguage === "en" ? "An error occurred while sending.\nPlease try again." : "发送时出错。\n请重试。";
          alert(errorMsg);
        }
      )
      .finally(function () {
        // 버튼 복원
        submitBtn.querySelector(".btn-text").textContent = originalBtnText;
        submitBtn.disabled = false;
      });
  });
}

// 맨 위로 가기 버튼
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// 통계 숫자 카운터 애니메이션
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = counter.innerText;
    const isPercentage = target.includes("%");
    const isPlus = target.includes("+");
    const numericValue = parseInt(target.replace(/\D/g, ""));

    let current = 0;
    const increment = numericValue / 50;

    const updateCounter = () => {
      if (current < numericValue) {
        current += increment;
        if (current > numericValue) current = numericValue;

        let displayValue = Math.floor(current);
        if (isPercentage) displayValue += "%";
        if (isPlus) displayValue += "+";

        counter.innerText = displayValue;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });
};

// 통계 섹션이 보일 때 애니메이션 시작
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".about-stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// 파티클 효과 (사용 안함)
const particles = document.querySelector(".particles");
if (particles) {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    particles.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
  });
}

// 폼 유효성 검사 (사용 안함)
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^[0-9-+\s()]*$/;
  return re.test(phone) && phone.length >= 9;
};

// 실시간 검증 (사용 안함)
document.getElementById("email")?.addEventListener("blur", function () {
  if (this.value && !validateEmail(this.value)) {
    this.style.borderColor = "#ff6b6b";
    alert("올바른 이메일 형식이 아닙니다.");
  } else {
    this.style.borderColor = "#e0e0e0";
  }
});

document.getElementById("phone")?.addEventListener("blur", function () {
  if (this.value && !validatePhone(this.value)) {
    this.style.borderColor = "#ff6b6b";
    alert("올바른 전화번호 형식이 아닙니다.");
  } else {
    this.style.borderColor = "#e0e0e0";
  }
});

// 로딩 애니메이션 (사용 안함)
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// 스크롤에 따른 네비 링크 활성화
const sections = document.querySelectorAll("section[id]");

const highlightNav = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

window.addEventListener("scroll", highlightNav);

// 푸터 연도 자동 업데이트
const currentYear = new Date().getFullYear();
const footerText = document.querySelector(".footer-bottom p");
if (footerText) {
  footerText.innerHTML = footerText.innerHTML.replace("2024", currentYear);
}

// 폼 중복 제출 방지 (사용 안함)
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// 다국어 지원
let currentLanguage = "ko";

const translations = {
  ko: {
    name: "한국어",
    flag: "🇰🇷",
  },
  en: {
    name: "English",
    flag: "🇺🇸",
  },
  cn: {
    name: "中文",
    flag: "🇨🇳",
  },
};

// 언어 전환
document.querySelectorAll(".language-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang") || e.target.closest("a").getAttribute("data-lang");

    if (lang && lang !== currentLanguage) {
      switchLanguage(lang);
    }
  });
});

function switchLanguage(lang) {
  currentLanguage = lang;

  // Update current language display
  const currentLangBtn = document.getElementById("currentLang");
  if (currentLangBtn) {
    currentLangBtn.innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].name}`;
  }

  // Update all translatable elements
  document.querySelectorAll("[data-ko]").forEach((element) => {
    const translatedText = element.getAttribute(`data-${lang}`);
    if (translatedText) {
      // Check if element contains HTML
      if (translatedText.includes("<")) {
        element.innerHTML = translatedText;
      } else {
        // For buttons with icons, update only the text span if it exists
        const btnText = element.querySelector(".btn-text");
        if (element.tagName === "BUTTON" && btnText) {
          btnText.textContent = translatedText;
        } else if (element.tagName === "A" && btnText) {
          btnText.textContent = translatedText;
        } else {
          element.textContent = translatedText;
        }
      }
    }
  });

  // Update placeholder texts
  document.querySelectorAll("[data-placeholder-ko]").forEach((element) => {
    const placeholder = element.getAttribute(`data-placeholder-${lang}`);
    if (placeholder) {
      element.placeholder = placeholder;
    }
  });

  // Store preference
  localStorage.setItem("preferred-language", lang);

  // Show language change notification
  showNotification(`Language changed to ${translations[lang].name}`);

  // Refresh AOS to re-calculate positions
  AOS.refresh();
}

// 저장된 언어 설정 불러오기
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("preferred-language");
  if (savedLang && savedLang !== "ko") {
    switchLanguage(savedLang);
  }
});

// 알림 시스템 (사용 안함)
function showNotification(message) {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".custom-notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification
  const notification = document.createElement("div");
  notification.className = "custom-notification";
  notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;

  // Add styles dynamically
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        opacity: 0;
    `;

  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100px)";
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// 스크롤 애니메이션 강화
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// 좌에서 우로 나타나는 애니메이션
document.querySelectorAll(".tech-card, .product-card, .stat-item, .contact-item").forEach((el, index) => {
  el.style.opacity = "0";
  el.style.transform = "translateX(-50px)";
  el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
  animateOnScroll.observe(el);
});

// 애니메이션 CSS 클래스
const style = document.createElement("style");
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// 히어로 섹션 패럴랙스 효과
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector(".hero-content");
      const particles = document.querySelector(".particles");

      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 500;
      }

      if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      ticking = false;
    });

    ticking = true;
  }
});
