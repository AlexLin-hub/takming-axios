import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                black: "#3A3A3A",
                white: "#F5F5F5",
                point: "#B48300",
                primary: "#B48300"
            }
        }
    }
});