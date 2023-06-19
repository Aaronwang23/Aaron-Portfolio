import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
