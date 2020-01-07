<template>
    <div class="home">
        <header>
            <Slider class="slider"/>

            <nav class="header-nav">
                <router-link to="/" class="header-nav-logo">
                    <img src="../assets/logo.png" alt="">
                </router-link>
                <div class="menu">
                    <router-link to="#content-what-is-remsmed" v-smooth-scroll>О сервисе</router-link>
                    <router-link to="#content-app-functions" v-smooth-scroll>Функции</router-link>
                    <router-link to="#content-personal-diary" v-smooth-scroll>Возможности</router-link>
                    <router-link to="/">Партнёры</router-link>
                </div>
                <router-link to="#get-access-form" v-smooth-scroll class="header-nav-btn">
                    <Button title="Оставить заявку"/>
                </router-link>
            </nav>
        </header>

        <div id="content-what-is-remsmed" class="content-what-is-remsmed">
            <div class="mockup">
                <img src="../assets/what-is-remsmed-mockup.png" alt="">
            </div>
            <div class="text">
                <h1>Что такое «Дневник здоровья»?</h1>
                <span>Дневник пациента — это удобный онлайн-сервис:</span>

                <ul class="list-type-1">
                    <li class="list-item">Вносите результаты измерений вручную или с помощью
                        интегрированных приборов
                    </li>
                    <li class="list-item">Ведите персональную медицинскую карту с историей
                        ваших измерений
                    </li>
                    <li class="list-item">Делитесь результатами измерений со специалистами
                        для повышения эффективности лечения
                    </li>
                    <li class="list-item">Получайте рекомендации, созданные специально для вас
                    </li>
                </ul>

                <router-link to="#get-access-form" v-smooth-scroll>
                    <Button title="Оставить заявку"/>
                </router-link>
            </div>
        </div>

        <div id="content-app-functions" class="content-app-functions">
            <h1>Функции приложения</h1>
            <ul class="list-type-3">
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-1.png" alt="">
                    </div>
                    <span>Планирование графике <br> приёма лекарств</span>
                </li>
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-2.png" alt="">
                    </div>
                    <span>Уведомление врача <br> об исполнении назначений</span>
                </li>
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-3.png" alt="">
                    </div>
                    <span>Ведение дневника <br> самочувствия</span>
                </li>
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-4.png" alt="">
                    </div>
                    <span>Удалённое предоставление <br> измерений врачу</span>
                </li>
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-5.png" alt="">
                    </div>
                    <span>Общение с врачами <br> через встроенный мессенджер</span>
                </li>
                <li class="list-item">
                    <div class="img">
                        <img src="../assets/app-function-img-6.png" alt="">
                    </div>
                    <span>Получение уведомлений <br> для выполнения назначений</span>
                </li>
            </ul>
        </div>

        <div id="content-personal-diary" class="content-personal-diary">
            <h1>Ведите персональный дневник мониторинга здоровья</h1>
            <ul class="list-type-2">
                <li class="list-item">
                    <span>1</span>
                    <h2>Хранение данных</h2>
                    <p>
                        Контролируйте и следите за динамикой изменения показателей вашего здоровья.
                        Вносите результаты измерений медицинских показателей вручную или с помощью интегрированных
                        приборов, храните историю измерений и отслеживайте динамику состояния здоровья
                    </p>
                </li>
                <li class="list-item">
                    <span>2</span>
                    <h2>Сообщение информации врачу</h2>
                    <p>
                        Позвольте специалисту дистанционно следить за вашим здоровьем.
                        Будьте на связи со специалистом - отправляйте информацию о своем самочувствии, обменивайтесь
                        сообщениями и получайте рекомендации по вашему здоровью и лечению.
                    </p>
                </li>
                <li class="list-item">
                    <span>3</span>
                    <h2>Напоминание о важном</h2>
                    <p>
                        Получайте рекомендации, созданные специально для вас.
                        Система, персонально настроенная под ваши требования, автоматически напомнит о необходимости
                        выполнить рекомендации медицинского специалиста: принять препарат или выполнить измерения.
                    </p>
                </li>
            </ul>
            <img src="../assets/personal-diary-img.png" alt="">
        </div>

        <div class="content-specialists-for">
            <div class="wrapper">
                <img src="../assets/specialists-for-img.png" alt="">
                <div class="text">
                    <h1>Специалистам</h1>
                    <ul class="list-type-1">
                        <li class="list-item">
                            Дистанционный контроль состояния здоровья ваших пациентов
                        </li>
                        <li class="list-item">
                            Наблюдение за динамикой изменения основных медицинских показателей
                        </li>
                        <li class="list-item">
                            Наличие алгоритмов автоматического анализа поступающей информации
                        </li>
                        <li class="list-item">
                            Индивидуальная система уведомлений об изменении состояния каждого пациента
                        </li>
                        <li class="list-item">
                            Дополнительный сервис коммуникации, позволяющий активно вовлекать пациента в процесс профилактики,
                            лечения и реабилитации.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="get-access">
            <h1>Получите бесплатный доступ к «Дневнику здоровья»</h1>
            <span>Оставьте свою электронную почту <br> и вы узнаете о запуске данного сервиса первым!</span>

            <form id="get-access-form" @submit.prevent class="get-access-form" :class="{ success: this.success.length !== 0 }">
                <div>
                    <label>
                        <Input placeholder="Ваш E-mail"/>
                    </label>
                    <Button @click="sendEmail" title="Отправить"/>
                </div>
            </form>

            <div class="tips">
                <span class="error">{{ error }}</span>
                <span class="success">{{ success }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Button from "@/components/Button";
    import Input from "@/components/Input";
    import Slider from "@/components/Slider";

    export default {
        name: "home",
        components: {Slider, Input, Button},
        data() {
            return {
                email: '',
                error: '',
                success: ''
            }
        },
        methods: {
            sendEmail() {
                if (/^[\S]+@[\w]+\.[\w.]+$/i.test(this.email)) {
                    this.error = '';
                    this.success = 'Готово!'
                } else if (this.email.length === 0) {
                    this.error = "Введите E-mail"
                } else {
                    this.error = "Введённый email имеет некорректный вид"
                }
            },
        }
    };
</script>

<style lang="scss">
    @import "../scss/variables";

    .home {
        overflow-x: hidden;
    }

    header {
        padding-top: 18px;
        width: 100%;
        height: 750px;
        position: relative;
        color: white;

        .header-nav {
            margin: auto;
            display: flex;
            width: 1160px;
            height: 60px;
            z-index: 2;
            position: relative;
            align-items: center;
            justify-content: space-between;

            a {
                color: white;
                text-decoration: none;
            }

            .header-nav-logo {
                margin-right: 200px;
            }

            .menu {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .header-nav-btn {
                margin-left: 72px;

                button {
                    background-color: transparent;
                    border: 1px solid hsl(211, 48, 55);
                }
            }
        }
    }

    .list-type-1 {
        width: 420px;
        list-style: none;
        text-align: left;
        padding: 0 0 0 16px;
        margin: 20px auto 40px 0;

        .list-item {
            margin-top: 26px;

            &:before {
                content: "\2022";
                color: $blue-bright;
                font-weight: bold;
                display: inline-block;
                width: 1em;
                margin-left: -1em;
            }
        }
    }

    .list-type-2 {
        padding: 0;
        width: 600px;
        list-style: none;
        margin: 70px 0 40px;

        .list-item {
            &:not(:first-child) {
                margin-top: 90px;
            }

            span {
                opacity: .25;
                width: 120px;
                height: 120px;
                display: flex;
                font-size: 60px;
                font-weight: bold;
                margin-top: -20px;
                margin-left: -100px;
                position: absolute;
                border-radius: 50%;
                align-items: center;
                color: $blue-bright;
                justify-content: center;
                clip-path: inset(0 25% 0 0);
                border: 1px solid hsla(194, 83, 48, 1);
            }
        }
    }

    .list-type-3 {
        margin: auto;
        padding: 0;
        width: 1040px;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: space-evenly;

        .list-item {
            width: 280px;
            margin-top: 60px;

            .img {
                width: 80px;
                height: 80px;
                display: flex;
                border-radius: 50%;
                align-items: center;
                margin: 0 auto 20px;
                justify-content: center;
                border: 1px solid hsla(194, 83, 48, .25);
            }
        }
    }

    .content-what-is-remsmed {
        display: flex;
        justify-content: center;
        padding: 148px 0 80px 0;

        .text {
            margin-top: 70px;
            text-align: left;
            font-weight: 600;
            color: $blue-main;
        }
    }

    .content-app-functions {
        position: relative;
        font-weight: 600;
        padding: 80px 0 160px;
        margin-top: 75px;
        background: rgb(14,114,183);
        background: linear-gradient(180deg, rgba(14,114,183,.04) 0%, rgba(40,43,100,.04) 100%);

        &:after {
            content: '';
            top: -75px;
            left: 0;
            height: 75px;
            width: 100%;
            position: absolute;
            background: url("../assets/header-img-mask-top.svg") top center no-repeat;
            background-size: cover;
        }
    }

    .content-personal-diary {
        margin: auto;
        width: 1040px;
        text-align: left;
        position: relative;
        padding: 160px 0;

        h1 {
            margin-left: 40px;
            color: $blue-dark
        }

        img {
            position: absolute;
            top: 0;
            margin-left: 600px;
            margin-top: 310px;
        }
    }

    .content-specialists-for {
        background: rgb(14,114,183);
        background: linear-gradient(180deg, rgba(14,114,183,.04) 0%, rgba(40,43,100,.04) 100%);

        .wrapper {
            width: 1160px;
            display: flex;
            padding: 30px 0 100px;

            img {
                margin-left: -70px;
                margin-top: -100px;

                @media screen and (max-width: 1360px){
                    margin-left: -350px;
                }
            }

            .text {
                width: 600px;
                text-align: left;
                margin-left: 40px;
                padding: 20px 0;

                h1 {
                    margin-bottom: 40px;
                }
            }
        }
    }

    .get-access {
        padding: 160px 0;
        background: rgb(14,114,183);
        background: linear-gradient(180deg, rgba(14,114,183,.1) 0%, rgba(40,43,100,.1) 100%);

        span {
            font-size: $h2;
            font-weight: 500;
        }

        .get-access-form {
            display: flex;
            margin: 60px 0;
            transition: .3s;
            flex-direction: column;
            clip-path: circle(100% at 50% 50%);

            &.success {
                height: 0;
                margin: 0;
                clip-path: circle(0% at 50% 50%);
            }

            input {
                width: 360px;
                margin-right: 40px;
            }
        }

        .tips {
            margin-top: 20px;

            .error {
                color: $error-tip-color
            }

            .success {
                color: $success-tip-color
            }
        }
    }
</style>
