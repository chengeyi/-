<template>
    <div class="hoemContainer">
        <div class="imgContent">
            <img src="../assets//img/banner 素材.png" alt="">
            <div class="introduce">
                <h1>白頭翁 (Chinese bulbul)</h1>
                <p>又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</p>
            </div>
        </div>
        <div class="content">
            <div class="item">
                <div class="title">
                    外觀
                    <div class="circle"></div>
                </div>
                <div class="inner">
                    白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
                </div>
            </div>
            <div class="item">
                <div class="title">
                    棲地
                    <div class="circle"></div>
                </div>
                <div class="inner">
                    白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。
                </div>
            </div>
            <div class="item">
                <div class="title">
                    食性
                    <div class="circle"></div>
                </div>
                <div class="inner">
                    以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/all.scss";

.hoemContainer {
    height: 100vh;
    width: 100%;

    .imgContent {
        position: relative;
        height: 70vh;
        overflow: hidden;
        width: 100%;

        img {
            width: 100%;
            object-fit: contain;
        }

        .introduce {
            position: absolute;
            right: 0;
            bottom: 20px;
            color: #fff;
            text-align: center;
        }
    }

    .content {
        background-color: #DCCCBC;
        height: 30vh;
    }

    .content {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding-top: 50px;

        .item {

            display: flex;
            width: 30%;
            gap: 15px;

            .title {
                position: relative;
                font-size: 36px;
                font-weight: 700;
                line-height: 40px;

                .circle {
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    background-color: #DCCCBC;
                    border: 8px solid #aa66667d;
                    border-radius: 100%;
                    bottom: 88px;
                    left: 23px;
                    opacity: 0.5;
                }
            }
        }
    }

    @include media-breakpoint-down(md) {
        height: 100%;

        .imgContent {
            height: 100%;

            .introduce {
                position: absolute;
                right: 0;
                top: 109px;
                bottom: 20px;
                color: #fff;
                text-align: center;
                height: 0px;
            }
        }

        .content {
            flex-direction: column;
            height: 100%;

            .item {
                flex-direction: column;
                width: 100%;
                padding-bottom: 10px;

                .circle {
                    left: 61px;
                    top: 24px;
                }
            }
        }
    }

}
</style>