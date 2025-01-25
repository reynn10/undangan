//Animasi Text

const element = document.querySelector('.couple-name');

const text = "Krish & Anaya"; 
let progress = 0;
const animationSpeed = 120; 

function animateText() {
  element.textContent = text.slice(0, progress); 
  progress++;
  if (progress <= text.length) {
    setTimeout(animateText, animationSpeed); 
  }
}

animateText()

//Countdown
document.addEventListener("DOMContentLoaded", () => {
    const scrollDown = document.querySelector(".scroll-down");
  
    scrollDown.addEventListener("click", () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  });
  
const targetDate = new Date("February 5, 2025 00:00:00").getTime();


const countdownInterval = setInterval(() => {
  const now = new Date().getTime(); 
  const timeRemaining = targetDate - now; 

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = `
      <p class="ongoing-event">Acara Sedang Berlangsung</p>
    `;
    return;
  }


  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

 
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

//RSVP
function openRSVPForm() {
    console.log("RSVP form opened");
    const modal = document.getElementById("rsvp-modal");
    modal.classList.remove("hidden");
  }
  
  document.getElementById("open-rsvp-btn").addEventListener("click", () => {
    console.log("RSVP button clicked");
    openRSVPForm();
  });
  
function closeRSVPForm() {
    const modal = document.getElementById("rsvp-modal");
    modal.classList.add("hidden");
  }


 
//Gift
document.getElementById('open-wedding-gift').addEventListener('click', function() {
var weddingGift = document.getElementById('wedding-gift'); 

if (weddingGift.style.display === 'none' || weddingGift.style.display === '') 
{ weddingGift.style.display = 'block'; } else { weddingGift.style.display = 'none'; } });

function closeGiftForm() {
  const giftForm = document.getElementById("wedding-gift");
  giftForm.style.display = "none";
}
//Wish  
  document.getElementById("send").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const wish = document.getElementById("wish").value;
  
    if (name && address && wish) {
      const initial = name.charAt(0).toUpperCase(); 
      const output = document.getElementById("wishes-output");
  
      const wishItem = `
        <div class="wish-item">
          <div class="wish-avatar">${initial}</div>
          <div class="wish-content">
            <p><strong>${name}</strong></p>
            <p>at ${address}</p>
            <p>"${wish}"</p>
          </div>
        </div>
      `;
      output.innerHTML += wishItem;
  
      document.getElementById("name").value = "";
      document.getElementById("address").value = "";
      document.getElementById("wish").value = "";
    } else {
      alert("Silakan isi semua kolom!");
    }
  });
  
//Music  
  const musicToggle = document.getElementById('music-toggle');
  const music = document.getElementById('background-music');
  
  if (musicToggle && music) {
      musicToggle.addEventListener('click', () => {
          if (music.paused) {
              music.play();
              musicToggle.innerText = "🎵";
          } else {
              music.pause();
              musicToggle.innerText = "🎵";
          }
      });
  }
  
//Set Reminder  
  document.getElementById('set-reminder').addEventListener('click', () => {
    const eventDetails = {
      title: 'Wedding Event',
      location: 'Your Wedding Location',
      description: 'Don’t miss the special day!',
      startDate: new Date(2025, 1, 5, 10, 0), 
      endDate: new Date(2025, 1, 5, 13, 0),  
    };
  
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${formatDateForCalendar(eventDetails.startDate)}/${formatDateForCalendar(eventDetails.endDate)}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    window.open(calendarLink, '_blank');
  });
  
  function formatDateForCalendar(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  }
//Aktifkan Notif  
  document.getElementById('turn-on-notification').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
      scheduleNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          scheduleNotification();
        }
      });
    }
  });
  
  function scheduleNotification() {
    const eventTime = new Date(2025, 1, 5, 10, 0).getTime(); 
    const currentTime = Date.now();
    const delay = eventTime - currentTime;
  
    if (delay > 0) {
      setTimeout(() => {
        new Notification('Acara Dimulai!', {
          body: 'Acara pernikahan telah dimulai. Jangan sampai ketinggalan!',
          icon: 'icon-url-here.png',
        });
      }, delay);
    } else {
      alert('Waktu acara sudah lewat.');
    }
  };
  
//Kirim ke WA
document.getElementById("sendToWhatsApp").addEventListener("click", function () {
  const nama = document.getElementById("nama").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const response = document.querySelector('input[name="response"]:checked')?.value;

  if (!nama || !whatsapp || !response) {
      alert("Mohon lengkapi semua data!");
      return;
  }

    const message = `Halo, saya ${nama}.
    dari ${alamat || "-"} ${response}`;


  const encodedMessage = encodeURIComponent(message);

  // ganti "62xxxxxxxxxx" 
  const whatsappURL = `https://wa.me/6285158441118?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});

//lokasi

document.getElementById("lihat-lokasi").addEventListener("click", function () {
  const mapsURL = "https://www.google.com/maps/place/Dusun+Pulokerto+RT+04+RW+05,+Desa+Sumbergede,+Kecamatan+Cangkring,+Kabupaten+Kediri/";
  window.open(mapsURL, "_blank");
});

document.querySelectorAll('.toggle-menu a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); 

  
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

 
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'      
      });
    }
  });
});

//Toggle
document.addEventListener("DOMContentLoaded", function () {
      const menuItems = document.querySelectorAll(".toggle-menu li");
      const targets = document.querySelectorAll(".couple, .date, .content, .maps, .wishes");

      function updateActiveMenu(index) {
        menuItems.forEach((item, i) => {
          if (i === index) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targetIndex = Array.from(targets).indexOf(entry.target);
              updateActiveMenu(targetIndex);
            }
          });
        },
        {
          root: null,
          threshold: 0.7,
        }
      );

      targets.forEach((target) => observer.observe(target));

      menuItems.forEach((item, index) => {
        item.querySelector("a").addEventListener("click", function (e) {
          e.preventDefault();
          const targetClass = this.getAttribute("href").substring(1);
          const targetElement = document.querySelector(`#${targetClass}`);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            updateActiveMenu(index);
          }
        });
      });
    });

//Memunculkan toggle menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.querySelector('.toggle-menu'); 
  const quoteSection = document.querySelector('.quote-section'); 
  const previousSection = quoteSection.previousElementSibling; 
  toggleMenu.style.display = window.innerWidth > 768 ? 'block' : 'none';

  const isMobile = () => window.innerWidth <= 768;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (isMobile()) {
          if (entry.target === quoteSection && entry.isIntersecting) {
            toggleMenu.style.display = 'block';
          } else if (entry.target === previousSection && entry.isIntersecting) {
            toggleMenu.style.display = 'none';
          }
        }
      });
    },
    {
      root: null, 
      threshold: 0.4, 
    }
  );

  if (previousSection) observer.observe(previousSection);
  observer.observe(quoteSection);
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      toggleMenu.style.display = 'block';
    } else {
      toggleMenu.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('music-toggle');
  const weddingGiftButton = document.getElementById('open-wedding-gift');
  const quoteSection = document.querySelector('.quote-section');
  const previousSection = quoteSection.previousElementSibling;

  // Fungsi deteksi mobile
  const isMobile = () => window.innerWidth <= 768;

  // Set awal untuk tombol (desktop/mobile)
  const updateButtonVisibility = () => {
    if (!isMobile()) {
      musicToggle.style.display = 'block';
      weddingGiftButton.style.display = 'block';
    } else {
      musicToggle.style.display = 'none';
      weddingGiftButton.style.display = 'none';
    }
  };

  updateButtonVisibility();

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (isMobile()) {
          if (entry.target === quoteSection && entry.isIntersecting) {
            musicToggle.style.display = 'block';
            weddingGiftButton.style.display = 'block';
          } else if (entry.target === previousSection && entry.isIntersecting) {
            musicToggle.style.display = 'none';
            weddingGiftButton.style.display = 'none';
          }
        }
      });
    },
    {
      root: null, 
      threshold: 0.4, 
    }
  );

  if (previousSection) observer.observe(previousSection);
  observer.observe(quoteSection);

  // Resize listener
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateButtonVisibility, 200);
  });
});








