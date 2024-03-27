<template>
    <nav class="navbar">
        <a href="index.html" title="website logo" class="website-logo">
            <picture>
                <source media="(max-width:768px)" srcset="../assets/images/logo-sm.png">
                
                <img src="../assets/images/logo-lg.png" alt="nadin soft logo">
            </picture>
        </a>
        <!-- menu -->
        <ul class="menu">
            <li class="menu-item">
                <router-link active-class="active" :to="{name:'home'}" class="menu-item-link btn-primary">dashboard</router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'todos'}" class="menu-item-link btn-primary">todos</router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'weather'}" class="menu-item-link btn-primary">weather</router-link>
            </li>

            <li class="menu-item">
                <router-link active-class="active" :to="{name:'profile'}" class="menu-item-link btn-primary">profile</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
/* navbar */
.navbar {
    width: 100%;
    height: 60px;
    background-color: #A0A5D7;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
}
/* website logo */
.website-logo {
    height: 100%;
    mix-blend-mode: overlay;
}
/* menu */
.menu {
    width: 200px;
    height: 100vh;
    padding-top: 60px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #A0A5D7;
    z-index: -1;
    display: flex;
    flex-direction: column;
}
.menu-item-link {
    width: 100%;
    padding: 20px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: 15px "montserrat";
    color: black;
    transition-duration: 0.3s;
}
.menu-item-link:hover ,
.active {
    background-color: #26292B;
    color: white;
}

/* Responsive */
@media (max-width: 768px) {
    .menu {
        opacity: 0;
    }
}
</style>