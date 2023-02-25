import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseItem from "./components/ui/BaseItem.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-item", BaseItem);

app.mount("#app");
