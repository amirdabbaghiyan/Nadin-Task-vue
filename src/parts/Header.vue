<template>
    <!-- navbar -->
    <nav class="navbar">
        <a href="index.html" title="website logo" class="website-logo">
            <!-- nav icon -->
            <picture>
                <source media="(max-width:768px)" srcset="../assets/images/logo-sm.png">
                
                <img src="../assets/images/logo-lg.png" alt="nadin soft logo">
            </picture>
        </a>
        <!-- menu -->
        <ul class="menu" :class="{'show-menu' : show}">
            <li class="menu-item">
                <router-link active-class="active" :to="{name:'home'}" class="menu-item-link btn-primary">
                    {{$t("dashboard")}}
                </router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'todos'}" class="menu-item-link btn-primary">
                    {{$t("todos")}}
                </router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'weather'}" class="menu-item-link btn-primary">
                    {{$t("weather")}}
                </router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'profile'}" class="menu-item-link btn-primary">
                    {{$t("profile")}}
                </router-link>
            </li>
        </ul>
        <!-- menu hamburger -->
        <div class="menu-hamburger" @click="showMenu">
            <div v-if="show">
                <CloseOutlined />
            </div>
            <div v-else>
                <MenuOutlined />
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";
import { MenuOutlined } from '@ant-design/icons-vue';
import { CloseOutlined } from '@ant-design/icons-vue';

// show menu
const show = ref(false);
window.addEventListener('click', e => {
    if (e.target.tagName != 'svg') {
        show.value = false;
    }
})
const showMenu = () => show.value = !show.value;
</script>

<style>
/* navbar */
.navbar {
    width: 100%;
    height: 60px;
    padding: 5px 40px;
    background: var(--bg-nav-color);
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: row-reverse;
}
/* nav icon */
.website-logo {
    height: 100%;
}
/* menu */
.menu {
    width: 200px;
    min-height: 100%;
    padding-top: 60px;
    background: var(--bg-menu-color);
    backdrop-filter: blur(9.1px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
    transform: translateX(-100%);
    visibility: hidden;
    opacity: 0;
    display: flex;
    flex-direction: column;
    transition-duration: var(--duration-time);
}
.menu-item-link {
    width: 100%;
    padding: 16px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: 15px "montserrat";
    color: #000;
    transition-duration: var(--duration-time);
}
.menu-item-link:hover ,
.active {
    background-color: var(--btn-hover-color);
    color: white;
}
/* menu hamburger */
.menu-hamburger {
    font-size: 28px;
    cursor: pointer;
    position: relative;
    z-index: 99;
    color: #fff;
    transition-duration: var(--duration-time);
} 
.menu-hamburger:hover {
    color: #000;
}
.show-menu {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
}
</style>