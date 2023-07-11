<template>
  <header class="navbar-container">
    <div class="navbar-content">
      <nav class="navbar">
        <!-- Company logo -->
        <img src="@/assets/Velocity-logo.png" alt="Company Logo" class="logo" />

        <!-- User icons -->
        <ul class="icons">
          <li class="icon">
            <img src="@/assets/notifcation-bell.png" alt="Notifications" />
          </li>
          <li class="icon">
            <img
              src="@/assets/notifications.png"
              alt="Notifications"
              class="mail-icon"
            />
          </li>
          <li class="icon">
            <img src="@/assets/user.png" alt="User Profile" class="pfp" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Navbar styling */
@media (min-width: 1024px) {
  .navbar-container {
    width: 100%;
    background-color: white;
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09);
  }

  .navbar-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .navbar {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .logo {
    width: 17%;
    max-width: 150px;
  }

  .icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    list-style: none;
  }

  .icon {
    margin-left: 10px;
  }

  .icon img {
    width: 2.5rem;
  }

  .pfp {
    border-radius: 18px;
  }
}

@media (min-width: 1500px) {
  .navbar-content {
    padding-left: 0%;
    padding-right: 0%;
    max-width: 1200px;
  }

  .navbar {
    width: 100%;
  }

  .logo {
    margin-left: 0px;
  }
}
</style>
