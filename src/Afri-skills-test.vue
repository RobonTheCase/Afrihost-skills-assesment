<template>
  <body :class="{ 'no-scroll': showSideMenu }">
    <div>
      <div class="main-container">
        <mobileNavComponent
          class="hide-on-desktop"
          :showSideMenu="showSideMenu"
        ></mobileNavComponent>
        <!-- Global elements-->
        <topBarComponent class="hide-on-small-screen"></topBarComponent>
        <sideNavComponent class="hide-on-small-screen"></sideNavComponent>

        <!-- Dashboard Content -->
        <div class="content-container">
          <div class="content" :class="{ 'content-min': isContentMin }">
            <div class="header">
              <div class="header-info">
                <h1 class="dashboard-heading">Vehicles Dashboard</h1>
                <p class="vehicle-count">{{ vehicleCount }} Total</p>
              </div>
              <div class="dashboard-info">
                <button class="show-filters" @click="toggleContentWidth">
                  {{ buttonText }}
                </button>
              </div>
            </div>
            <div class="heading-row">
              <div class="column data-img data-hide"></div>
              <div class="column data-name">Name and ID</div>
              <div class="column data-model data-hide">Vehicle Model</div>
              <div class="column data-service">Next Service</div>
              <div class="column data-trips data-hide">Trips</div>
              <div class="column data-en data-hide">Energy Used</div>
              <div class="column data-man"></div>
            </div>
            <div class="data-rows">
              <div
                v-for="vehicle in filteredVehicles"
                :key="vehicle.id"
                class="data-row"
              >
                <div class="column data-img">
                  <img
                    :src="getImageUrl(vehicle)"
                    alt="Vehicle Image"
                    class="veh-img"
                  />
                </div>
                <div class="column data-name">
                  <div class="name">{{ vehicle.name }}</div>
                  <div class="id">#{{ vehicle.id }}</div>
                </div>
                <div class="column data-model data-hide">
                  {{ vehicle.model }}
                </div>
                <div class="column data-service">
                  {{ formatDate(vehicle.service_due) }}
                </div>
                <div class="column data-trips data-hide">
                  {{ vehicle.trips }}
                </div>
                <div class="column data-en data-hide">
                  {{ vehicle.energy_usage }}kWh
                </div>
                <div class="column data-man">
                  <button class="manage-button">Manage</button>
                </div>
              </div>
            </div>
          </div>

          <div class="filter-div open" v-show="showFilterDiv">
            <p class="filter-heading">FILTER</p>
            <div class="filter-container">
              <div class="filter-label">
                <label for="trips-slider">Trips Taken:</label>
                <span>{{ tripsFilter }}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1500"
                v-model="tripsFilter"
                id="trips-slider"
                class="slider"
              />
            </div>
            <div class="filter-container">
              <div class="filter-label">
                <label for="service-slider">Service Due:</label>
                <span>{{ serviceFilter }} Days</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                v-model="serviceFilter"
                id="service-slider"
                class="slider"
              />
            </div>
            <div class="filter-container">
              <label for="model-input" class="filter-label"
                >Vehicle Model</label
              >
              <input
                type="text"
                v-model="modelFilter"
                class="model-input"
                id="model-input"
                placeholder="Vehicle Model"
              />
            </div>
            <div class="filter-container">
              <label for="status-input" class="filter-label">Status</label>
              <input
                type="text"
                v-model="statusFilter"
                class="status-input"
                id="status-input"
                placeholder="Status"
              />
            </div>
            <div class="filter-container">
              <label for="location-input" class="filter-label">Location</label>
              <input
                type="text"
                v-model="locationFilter"
                class="location-input"
                id="location-input"
                placeholder="location"
              />
            </div>
            <button class="show-filters mobi-only" @click="toggleContentWidth">
              {{ buttonText }}
            </button>
          </div>
          <!-- Overlay -->
          <div
            v-if="showFilterDiv"
            class="filter-overlay"
            @click="hideFilterDiv"
          ></div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import topBarComponent from "@/components/TopBar.vue";
import sideNavComponent from "@/components/SideNav.vue";
import mobileNavComponent from "@/components/MobileNav.vue";

export default {
  components: {
    topBarComponent,
    sideNavComponent,
    mobileNavComponent,
  },
  data() {
    return {
      isContentMin: false, //content width (filters button)
      buttonText: "Show Filters", //filters button text
      showFilterDiv: false, //filter div logic
      tripsFilter: [0, 1500],
      serviceFilter: ["2000-01-01", "2100-12-31"],
      modelFilter: "",
      statusFilter: "",
      locationFilter: "",
      showSideMenu: false,
      vehicles: [
        {
          id: "0001",
          name: "Spire",
          model: "Tesla Model X",
          service_due: "2022-06-13",
          trips: 714,
          energy_usage: 450,
        },
        {
          id: "0002",
          name: "Eos",
          model: "Volvo Intellisafe",
          service_due: "2022-05-23",
          trips: 825,
          energy_usage: 321,
        },
        {
          id: "0003",
          name: "Eagle",
          model: "BMW 7 Series",
          service_due: "2024-10-10",
          trips: 125,
          energy_usage: 230,
        },
        {
          id: "0004",
          name: "Expedition",
          model: "Infinity Q50S",
          service_due: "2022-04-14",
          trips: 734,
          energy_usage: 129,
        },
        {
          id: "0005",
          name: "Bliss",
          model: "Audi RS7",
          service_due: "2023-01-01",
          trips: 823,
          energy_usage: 553,
        },
        {
          id: "0006",
          name: "Vigor",
          model: "Tesla Model S",
          service_due: "2022-05-01",
          trips: 1142,
          energy_usage: 650,
        },
        {
          id: "0007",
          name: "Scorpion",
          model: "Tesla Model X",
          service_due: "2022-04-21",
          trips: 925,
          energy_usage: 425,
        },
        {
          id: "0008",
          name: "Resolve",
          model: "BMW I3",
          service_due: "2022-04-29",
          trips: 624,
          energy_usage: 640,
        },
      ],
    };
  },
  computed: {
    vehicleCount() {
      return this.filteredVehicles.length;
    },
    filteredVehicles() {
      return this.vehicles.filter((vehicle) => {
        const tripsFilter =
          vehicle.trips >= this.tripsFilter[0] &&
          vehicle.trips <= this.tripsFilter[1];
        const serviceFilter =
          vehicle.service_due >= this.serviceFilter[0] &&
          vehicle.service_due <= this.serviceFilter[1];
        const modelFilter = vehicle.model
          .toLowerCase()
          .includes(this.modelFilter.toLowerCase());

        return tripsFilter && serviceFilter && modelFilter;
      });
    },
  },
  methods: {
    toggleContentWidth() {
      this.isContentMin = !this.isContentMin;
      this.buttonText = this.isContentMin ? "Hide Filters" : "Show Filters";
      this.showFilterDiv = this.isContentMin;
    },
    getImageUrl(vehicle) {
      const imageUrl = require(`@/assets/${vehicle.name}.png`);
      return imageUrl;
    },
    formatDate(dateString) {
      // Custom date formatting logic
      return dateString;
    },
    toggleFilterDiv() {
      this.showFilterDiv = !this.showFilterDiv;
      this.buttonText = this.showFilterDiv ? "Hide Filters" : "Show Filters";
    },
    updateShowSideMenu(newVal) {
      this.showSideMenu = newVal;
    },
  },
};
</script>

<style>
@import "@/assets/styles/styles.css";

@media (max-width: 767px) {
  .hide-on-small-screen {
    display: none !important;
  }
}

@media (min-width: 1024px) {
  .hide-on-desktop {
    display: none !important;
  }
}
</style>
