import { createApp } from 'vue'
import App from './App.vue'

import "./styles/main.css"
import "@fontsource/overpass/latin-400.css"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiLink, HiSolidCode, HiSolidGlobeAlt, MdMonitorRound, SiAstro, SiCplusplus, SiDebian, SiDiscord, SiDocker, SiGithub, SiGo, SiHomeassistant, SiHtml5, SiJavascript, SiLinkedin, SiLinux, SiPostgresql, SiProxmox, SiPython, SiReact, SiTailwindcss, SiTruenas, SiTypescript } from "oh-vue-icons/icons";

addIcons(HiSolidCode, HiSolidGlobeAlt, MdMonitorRound); //add skills icons
addIcons(SiGithub, SiLinkedin, SiDiscord, HiLink); //contacts, github, and link
addIcons(SiTypescript, SiReact, SiPython, SiTailwindcss, SiAstro, SiJavascript, SiCplusplus, SiLinux, SiHtml5, SiDebian, SiDocker, SiHomeassistant, SiProxmox, SiTruenas, SiPostgresql, SiGo); //project languages

let hue = 0;
window.setInterval(() => {
    document.getElementById("header").style.color = `hsla(${hue}, 100%, 75%, 1)`;
    (hue+=1)>=360&&(hue=0);
}, 20);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
