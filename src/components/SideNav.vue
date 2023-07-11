<template>
  <div class="sidebar" :class="{ expanded: isExpanded }">
    <div class="hamburger" @click="toggleSidebar">
      <img
        src="@/assets/hamburger.png"
        alt="hamburger navigation"
        class="ham-icon"
      />
    </div>
    <div class="sidebar-content">
      <div v-if="isExpanded">
        <div class="welcome-user">
          <div class="img-column">
            <img src="@/assets/user.png" alt="User Image" class="pfp" />
          </div>
          <div class="txt-column">
            <h1>Welcome</h1>
            <p>Joan Wilkins</p>
          </div>
        </div>
        <!-- Icons with labels -->
        <div class="s-icon-with-label">
          <img src="@/assets/overview.png" alt="overview" />
          <h4 class="label">Overview</h4>
        </div>
        <div class="s-icon-with-label">
          <img src="@/assets/stats.png" alt="stats" />
          <h4 class="label">Stats</h4>
        </div>
        <div class="s-icon-with-label active">
          <img src="@/assets/vehicles.png" alt="vehicles" />
          <h4 class="label">Vehicles</h4>
        </div>
        <div class="s-icon-with-label">
          <img src="@/assets/config.png" alt="configuration" />
          <h4 class="label">Config</h4>
        </div>
        <div class="s-icon-with-label">
          <img src="@/assets/map.png" alt="map" />
          <h4 class="label">Map</h4>
        </div>
        <div class="s-icon-with-label">
          <img src="@/assets/notifications.png" alt="notifications" />
          <h4 class="label">Notifications</h4>
        </div>
        <div class="s-icon-with-label">
          <img src="@/assets/settings.png" alt="settings" />
          <h4 class="label">Settings</h4>
        </div>
      </div>
      <div v-else>
        <!-- Icons without labels -->
        <div class="s-icon">
          <img src="@/assets/overview.png" alt="overview" />
        </div>
        <div class="s-icon">
          <img src="@/assets/stats.png" alt="stats" />
        </div>
        <div class="s-icon active">
          <img src="@/assets/vehicles.png" alt="vehicles" />
        </div>
        <div class="s-icon">
          <img src="@/assets/config.png" alt="configuration" />
        </div>
        <div class="s-icon"><img src="@/assets/map.png" alt="map" /></div>
        <div class="s-icon">
          <img src="@/assets/notifications.png" alt="notifications" />
        </div>
        <div class="s-icon">
          <img src="@/assets/settings.png" alt="settings" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false, //sidebar
    };
  },
  computed: {},
  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
/* Sidebar navigation styling */

.sidebar {
  width: 80px;
  background-color: white;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar.expanded {
  width: 240px;
}

.hamburger {
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
  padding-top: 20px;
}

.hamburger img {
  width: 35px;
  margin-left: 20px;
}

.sidebar-content {
  margin-top: 100px;
  transition: transform 0.3s ease-in-out;
}

.welcome-user {
  display: flex;
  padding: 0 0 20px 20px;
}
.img-column {
  padding-left: 10px;
}

.pfp {
  width: 50px;
  border-radius: 20%;
}

.txt-column {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
.txt-column h1 {
  font-size: 20px;
  font-weight: 300;
  margin: 0;
}

.txt-column p {
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  color: #bfc5d2;
}

.s-icon {
  padding: 20px 0 10px 0;
  cursor: pointer;
}

.s-icon:hover {
  background-color: #ebefff;
}

.s-icon img {
  width: 35px;
  margin-left: 20px;
}

.s-icon-with-label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: width 2s linear 1s;
  cursor: pointer;
  padding-left: 10px;
}

.s-icon-with-label:hover {
  background-color: #ebefff;
}

.s-icon-with-label img {
  width: 35px;
  margin-left: 20px;
}

.s-icon-with-label .label {
  margin-left: 15px;
  font-weight: 200;
  color: #8798ad;
  font-size: 16px;
}

.active {
  background-color: #ebefff;
  border-left: 4px solid #2e5bff;
}
</style>
