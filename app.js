const markAllAsRead = document.getElementById('mark__all')
const unreadNotification = document.querySelectorAll('.unread')
const red_dot = document.querySelectorAll('.red__dot')
const notification_count = document.getElementById('notification__count')


markAllAsRead.addEventListener("click", () => {
  unreadNotification.forEach(unread => {
    unread.classList.toggle('active')
  })

  red_dot.forEach(dot => {
    dot.classList.toggle('active')
  })

  notification_count.innerText = '0'

  markAllAsRead.innerText = 'Marked all as read'
  markAllAsRead.style.color = 'hsl(1, 90%, 64%)'

  setInterval(() => {
    unreadNotification.forEach(unread => {
      unread.classList.remove('active')
    })
  
    red_dot.forEach(dot => {
      dot.classList.remove('active')
    })
  
    notification_count.innerText = '3'
  
    markAllAsRead.innerText = 'Mark all as read'
    markAllAsRead.style.color = 'hsl(219, 14%, 63%)'
  }, 4000);
}) 










