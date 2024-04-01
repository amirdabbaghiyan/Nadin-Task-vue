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
    background-color: var(--secondary-color); 
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
    background-color: var(--secondary-color);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
}
.menu-item {
    padding: 3px;
}
.menu-item-link {
    width: 100%;
    padding: 16px 30px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: 15px "montserrat";
    color: #C5C5C5;
    transition-duration: 0.3s;
}
.menu-item-link:hover ,
.active {
    background-color: var(--primary-color);
    color: white;
}
/* menu hamburger */
.menu-hamburger {
    display: none;
}
/* responsive */
@media(max-width:768px) {
    /* navbar */
    .navbar {
        height: 60px;
        padding: 0 5%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    /* nav icon */
    .website-logo {
        height: 90%;
    }
    /* menu */
    .menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        transform: translateX(-100%);
        visibility: hidden;
        opacity: 0;
        transition-duration: var(--duration-time);
    }
    .show-menu {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }
    /* menu hamburger */
    .menu-hamburger {
        display: flex;
        font-size: 28px;
        cursor: pointer;
        position: relative;
        z-index: 99;
        transition-duration: var(--duration-time);
    } 
    .menu-hamburger:hover {
        color: var(--primary-color);
    }
}
</style>