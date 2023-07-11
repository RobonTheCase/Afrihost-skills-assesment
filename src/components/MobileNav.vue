<template>
  <div class="navbar-container">
    <div class="mobile-navbar">
      <div class="hamburger" @click="showSideMenu = !showSideMenu">
        <img
          src="@/assets/hamburger.png"
          alt="hamburger menu"
          class="ham-icon"
        />
      </div>
      <div class="navbar-heading">
        <h1>Vehicles Dashboard</h1>
      </div>
      <div class="notifications">
        <img src="@/assets/notifcation-bell.png" alt="notifications" />
      </div>
    </div>
  </div>
  <transition name="slide">
    <div v-if="showSideMenu" class="mobi-side">
      <div class="welcome-user">
        <div class="user-image-column">
          <img src="@/assets/user.png" alt="User Image" class="user-image" />
        </div>
        <div class="text-column">
          <h1>Welcome</h1>
          <p>Joan Wilkins</p>
        </div>
      </div>
      <!-- Icons with labels -->
      <div class="sidebar-icon active">
        <img src="@/assets/overview.png" alt="overview" />
        <h4 class="label">Dashboard</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/stats.png" alt="stats" />
        <h4 class="label">Stats</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/vehicles.png" alt="vehicles" />
        <h4 class="label">Vehicles</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/config.png" alt="configuration" />
        <h4 class="label">Config</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/map.png" alt="map" />
        <h4 class="label">Map</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/notifications.png" alt="notifications" />
        <h4 class="label">Notifications</h4>
      </div>
      <div class="sidebar-icon">
        <img src="@/assets/settings.png" alt="settings" />
        <h4 class="label">Settings</h4>
      </div>
    </div>
  </transition>
  <!-- Overlay -->
  <div v-if="showSideMenu" class="overlay" @click="showSideMenu = false"></div>
</template>

<script>
export default {
  data() {
    return {
      showSideMenu: false,
    };
  },
  watch: {
    showSideMenu(newVal) {
      this.$emit("update:showSideMenu", newVal);
    },
  },
};
</script>

<style scoped>
.navbar-container {
  flex-grow: 1;
  overflow-x: hidden;
}

.mobile-navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  height: 50px;
  padding: 10px 2px;
  z-index: 1000;
}

.hamburger img {
  width: 30px;
}

.navbar-heading h1 {
  font-size: 18px;
  font-weight: 500;
  color: #2d384d;
}

.notifications img {
  width: 35px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.mobi-side {
  width: 300px;
  background-color: white;
  padding-top: 50px;
  position: absolute;
  top: 50px;
  margin-top: 10px;
  height: calc(100vh - 110px);
  height: 100vh;
  z-index: 999;
}

.overlay {
  position: fixed;
  top: 63px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #9197a5;
  z-index: 995;
  pointer-events: auto;
}

.welcome-user {
  display: flex;
  margin: 0 0 40px 40px;
}

.user-image-column {
  padding-right: 10px;
}

.user-image {
  width: 45px;
  border-radius: 8px;
}

.text-column {
  padding-left: 10px;
}

.text-column h1 {
  font-size: 20px;
  font-weight: 300;
  margin: 0;
}

.text-column p {
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  color: #bfc5d2;
}

.sidebar-icon img {
  width: 35px;
  margin-left: 20px;
}

.sidebar-icon {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: width 2s linear 1s;
  cursor: pointer;
  padding-left: 20px;
}

.sidebar-icon .label {
  margin-left: 15px;
  font-weight: 400;
  color: #8798ad;
  font-size: 16px;
  letter-spacing: 0.025rem;
}

.active {
  background-color: #ebefff;
  border-left: 4px solid #2e5bff;
}
</style>
