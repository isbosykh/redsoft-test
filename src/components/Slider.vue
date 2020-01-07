<template>
    <div @mouseenter="$refs.swiperRef.swiper.autoplay.stop()"
         @mouseleave="$refs.swiperRef.swiper.autoplay.start()">
        <swiper ref="swiperRef" :options="swiperOption">
            <swiper-slide>
                <div class="slide slide-1">
                    <h1 class="header-h1">
                        Расширяем возможности предоставления <br>
                        качественных медицинских услуг
                    </h1>

                    <h2 class="header-h2">
                        «Дневник здоровья» – новый сервис для самоконтроля <br>
                        показателей состояния здоровья, разработанный для <br>
                        участников программы «Мое здоровье».
                    </h2>

                    <router-link to="#content-what-is-remsmed" v-smooth-scroll>
                        <Button class="header-btn" title="Узнать больше"/>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide slide-2">
                    <h1 class="header-h1">
                        Следить за здоровьем станет
                    </h1>

                    <h2 class="header-h2">
                        Скоро вы сможете находиться на связи со своим лечащим врачом <br>
                        независимо от своего местоположения, вести дневник мониторинга <br>
                        самочувствия, получать рекомендации по плану лечения и многое другое.
                    </h2>

                    <router-link to="#content-what-is-remsmed" v-smooth-scroll>
                        <Button class="header-btn" title="Узнать больше"/>
                    </router-link>
                </div>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    import Button from "@/components/Button";
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Slider",
        components: { Button, swiper, swiperSlide },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 5000,
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    .swiper-pagination {
        position: absolute;
        margin-bottom: 30px;

        &:after {
            content: '';
            width: 48px;
            height: 20px;
            border: 1px solid hsl(211, 48, 55);
            position: absolute;
            top: 0;
            border-radius: 999em;
            left: 50%;
            margin-left: -25px;
        }

        &::v-deep {
            .swiper-pagination-bullet {
                opacity: 1;
                background: hsl(211, 48, 55);
            }
            .swiper-pagination-bullet-active {
                color: #fff;
                background: white;
            }
        }
    }

    .swiper-container {
        top: 0;
        left: 0;
        width: 100%;
        height: 750px;
        position: absolute;

        &:after {
            left: 0;
            bottom: -2px;
            z-index: 1;
            width: calc(100% + 5px);
            content: '';
            height: 75px;
            position: absolute;
            background-size: cover;
            background: url("../assets/header-img-mask-bottom.svg") no-repeat bottom center;
        }

        .slide {
            top: 0;
            left: 0;
            width: 100%;
            height: 750px;
            position: absolute;

            &.slide-1 {
                background:
                        url("../assets/slide_1_mask.png"),
                        url("../assets/slide_1-min.jpg")
                        75% 25%;
                background-size: inherit;
            }

            &.slide-2 {
                background:
                        url("../assets/slide_1_mask.png"),
                        url("../assets/slide_2-min.jpg")
                        75% 25%;
                background-size: inherit;
            }

            .header-h1 {
                font-weight: 500;
                margin: 196px auto 50px;
            }

            .header-h2 {
                font-weight: 500;
                color: $font-h2-color
            }

            .header-btn {
                margin-top: 50px;
            }
        }
    }
</style>