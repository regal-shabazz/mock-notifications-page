const markAllAsRead = document.getElementById('mark__all')
const unreadNotification = document.querySelectorAll('.unread')
const unreadNotifText = document.querySelector('.unread__notif');
const red_dot = window.getComputedStyle(unreadNotifText, "::after")

console.log(red_dot);


markAllAsRead.addEventListener("click", () => {
  unreadNotification.forEach(unread => {
    unread.classList.toggle('active')
  })
})