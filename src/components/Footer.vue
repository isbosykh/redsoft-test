<template>
    <footer class="footer">
        <div class="footer-menu">
            <nav class="footer-nav">
                <router-link to="/" class="nav-logo">
                    <img src="../assets/footer-logo.png" alt="">
                </router-link>
                <div class="menu">
                    <router-link to="#content-what-is-remsmed" v-smooth-scroll>О сервисе</router-link>
                    <router-link to="#content-app-functions" v-smooth-scroll>Функции</router-link>
                    <router-link to="#content-personal-diary" v-smooth-scroll>Возможности</router-link>
                    <router-link to="/">Специалисты</router-link>
                    <router-link href="tel:88005004549">88005004549</router-link>
                </div>
            </nav>
        </div>
        <div class="footer-ad">
            <span>Разработка сайта <span class="red">Redsoft</span></span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    footer {
        height: 220px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: $blue-darker;

        .footer-menu {
            flex-grow: 1;
            width: 1160px;
            display: flex;
            align-items: center;

            .footer-nav {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                .nav-logo {
                    margin-right: 240px;
                }

                .menu {
                    flex-grow: 1;
                    display: flex;
                    justify-content: space-between;

                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }

        .footer-ad {
            height: 80px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;

            &:before {
                content: '';
                top: 0;
                height: 1px;
                width: 1160px;
                position: absolute;
                background-color: rgb(50, 91, 145);
            }


            span {
                color: $font-quote;
                font-size: 14px;

                &.red {
                    color: hsl(333, 100, 55)
                }
            }
        }
    }
</style>