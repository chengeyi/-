<template>
    <header id="navBarContainer">
        <div class="navBarContent" ref="navBarContent">
            <div class="navBarItem">
                <ul>
                    <li @click="showMenu()">{{ showMenuBtn }}</li>
                    <li @click="goHome()">白頭翁不吃小米</li>
                    <li>白頭翁的特性</li>
                    <li @click="goHome()">白頭翁的故事</li>
                    <li>白頭翁的美照</li>
                    <li>白頭翁的危機</li>
                    <div class="circle-container-rwd">
                        <div class="circle">
                            <div class="head"></div>
                            <div class="eye"></div>
                            <div class="beak"></div>
                            <div class="neck"></div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>

        <div class="rwdMenu" :class="{ 'show': isShow }">
            <div class="rwdContent">
                <div>白頭翁的特性</div>
                <div>白頭翁的故事</div>
                <div>白頭翁的美照</div>
                <div>白頭翁的危機</div>
            </div>
        </div>

        <div class="circle-container">
            <div class="circle">
                <div class="head"></div>
                <div class="eye"></div>
                <div class="beak"></div>
                <div class="neck"></div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue';
import { useRouter } from "vue-router";

const isShow: Ref<boolean> = ref(false);
const showMenuBtn: Ref<string> = ref('☰');
function showMenu(): void {
    isShow.value = !isShow.value;

    if (isShow.value) {
        showMenuBtn.value = '✖';
    } else {
        showMenuBtn.value = '☰';
    }
}

const router = useRouter();
function goHome() {
    router.push('/')
}

const showDownBtn: Ref<boolean> = ref(false);
const navBarContent = ref<HTMLInputElement | null>(null);
// function collapse() {
//     navBarContent.value!.classList.add('up');
//     showDownBtn.value = true;

// }

function down() {
    navBarContent.value!.classList.remove('up');
    showDownBtn.value = false;
}

onMounted(() => {
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/all.scss";

#navBarContainer {
    position: sticky;
    top: 0;
    z-index: 2;
    width: 345px;
    height: 100vh;
    right: 0;

    .navBarContent {
        position: relative;
        top: 0;
        transition: top .5s ease;
        height: 100%;

        .navBarItem {
            display: flex;
            justify-content: center;
            border-radius: 10px;
            height: 100%;

            ul {
                border: 1px solid rgba(9, 10, 11, 0.05);
                padding: 15px 20px 15px 20px;
                display: flex;
                list-style-type: none;
                gap: 3.5rem;
                font-family: emoji;
                background-color: rgb(255, 255, 255);
                border-radius: 0.25rem;
                box-shadow: 0 10px 7px -11px;
                flex-direction: column;
                width: 100%;
                height: 100%;
                align-items: center;
                padding-top: 78.33px;

                li {
                    cursor: pointer;
                    transition: .3s ease-in-out;

                    &:hover {
                        color: #AA6666;
                        border-bottom: 2px solid #AA6666;
                    }

                    &:first-child {
                        display: none;
                    }
                }

                li:first-child {
                    font-weight: 700;
                    font-size: 30px;
                }

                li:not(:first-child) {
                    font-size: 13px;
                    line-height: 1.8;
                }

                li:nth-child(2) {
                    font-size: 25px;
                    font-weight: 700;
                }
            }
        }

        &.up {
            position: relative;
            top: -100px;
            transition: top 1.5s ease;
        }
    }

    .down {
        position: absolute;
        top: 0;
        right: 50%;
        border: 1px solid rgba(9, 10, 11, .05);
        background-color: rgb(255 255 255);
        box-shadow: 0 10px 7px -11px;
        width: 40px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        transition: .3s;

        &:hover {
            transition: .3s;
            opacity: .3;
        }
    }

    .rwdMenu {
        position: absolute;
        top: -1550%;
        height: 0;
        width: 100%;
        transition: all 1.5s ease, height 1.5s ease;

        .rwdContent {
            height: 100vh;

            div {
                cursor: pointer;
                transition: .3s ease-in-out;
                border-top: 1px solid rgba(9, 10, 11, 0.05);
                height: 10vh;
                line-height: 10vh;
                font-size: 2.5rem;
                padding-left: 15px;

                &:hover {
                    opacity: .3;
                }
            }
        }
    }

    .circle-container-rwd {
        display: none;
    }

    .circle-container {
        position: absolute;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        top: 69px;
        right: -50px;
    }

    .circle {
        position: relative;
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;
    }

    .head {
        position: absolute;
        top: 22%;
        left: 12%;
        width: 61px;
        height: 32px;
        background-color: black;
        clip-path: polygon(6% 49%, 25% 19%, 41% 7%, 59% 7%, 75% 9%, 91% 19%, 99% 38%, 83% 34%, 66% 33%, 50% 34%, 34% 41%, 0 75%);
    }

    .eye {
        position: absolute;
        top: 38%;
        left: 50%;
        width: 20px;
        height: 20px;
        background-color: black;
        border-radius: 50%;
    }

    .beak {
        position: absolute;
        top: 36%;
        left: 68%;
        width: 27px;
        height: 43px;
        background-color: black;
        clip-path: polygon(14% 8%, 46% 0, 65% 0%, 81% 6%, 89% 21%, 73% 16%, 47% 13%, 15% 17%);
        transform: rotate(358deg);

    }

    .neck {
        position: absolute;
        top: 34%;
        left: 29%;
        width: 42px;
        height: 57px;
        background-color: black;
        clip-path: polygon(0 62%, 34% 63%, 58% 62%, 99% 48%, 95% 60%, 75% 75%, 57% 76%, 45% 76%, 33% 76%, 23% 76%, 12% 76%, 0 75%);

    }

    @include media-breakpoint-down(md) {
        top: 0;
        width: 100%;
        height: 87px;

        .navBarContent {
            z-index: 999;
            position: relative;

            .navBarItem {
                ul {
                    justify-content: space-around;
                    padding: 0px 0px 2px 0px;
                    width: 100%;
                    gap: 9.5rem;
                    flex-direction: row;
                    padding-top: 0;

                    li:not(:nth-child(1)):not(:nth-child(2)) {
                        display: none;
                    }

                    li {
                        font-size: 13px;

                        &:last-child {
                            display: block !important;
                        }

                        &:first-child {
                            display: block;
                        }
                    }

                }
            }
        }

        .rwdMenu.show {
            transition: all 1.5s ease, height 1.5s ease;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(255, 255, 255);
            padding-top: 80px;

            .rwdContent {
                height: 100vh;

                div {
                    cursor: pointer;
                    transition: .3s ease-in-out;
                    border-top: 1px solid rgba(9, 10, 11, 0.05);
                    height: 10vh;
                    line-height: 10vh;
                    font-size: 2.5rem;
                    padding-left: 15px;

                    &:hover {
                        opacity: .3;
                    }
                }
            }
        }

        .circle-container {
            display: none;
        }

        .circle-container-rwd {
            display: block;
            width: 69px;
            height: 69px;
        }

        .circle {
            width: 69px;
            height: 69px;
        }

        .head {
            position: absolute;
            top: 22%;
            left: 12%;
            width: 37px;
            height: 26px;
            background-color: black;
            clip-path: polygon(6% 49%, 25% 19%, 41% 7%, 59% 7%, 75% 9%, 91% 19%, 99% 38%, 83% 34%, 66% 33%, 50% 34%, 34% 41%, 0 75%);
        }

        .eye {
            position: absolute;
            top: 38%;
            left: 46%;
            width: 13px;
            height: 13px;
            background-color: black;
            border-radius: 50%;
        }

        .beak {
            position: absolute;
            top: 36%;
            left: 67%;
            width: 21px;
            height: 43px;
            background-color: black;
            clip-path: polygon(14% 8%, 46% 0, 65% 0%, 81% 6%, 89% 21%, 73% 16%, 47% 13%, 15% 17%);
            transform: rotate(358deg);
        }

        .neck {
            position: absolute;
            top: 23%;
            left: 12%;
            width: 42px;
            height: 57px;
            background-color: black;
            clip-path: polygon(0 62%, 34% 63%, 58% 62%, 99% 48%, 95% 60%, 75% 75%, 57% 76%, 45% 76%, 33% 76%, 23% 76%, 12% 76%, 0 75%);
        }
    }


}

@media screen and (max-width:400px) {
    ul {
        gap: 12px !important;
    }
}
</style>