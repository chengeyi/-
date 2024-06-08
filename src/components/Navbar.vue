<template>
    <header id="navBarContainer">
        <div class="navBarContent" ref="navBarContent">
            <div class="navBarItem">
                <ul>
                    <li @click="goHome()">AI SHOW UP</li>
                    <li @click="goHome()">產生 SA 文件</li>
                    <li>test2</li>
                    <li>test3</li>
                    <li>test4</li>
                    <li @click="collapse()">
                        ⤴︎
                    </li>
                    <li @click="showMenu()">{{ showMenuBtn }}</li>
                </ul>
            </div>
        </div>

        <div v-if="showDownBtn" class="down" @click="down()">
            ⤵︎
        </div>

        <div class="rwdMenu" :class="{ 'show': isShow }">
            <div class="rwdContent">
                <div>產生 SA 文件</div>
                <div>test2</div>
                <div>test3</div>
                <div>test4</div>
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
function collapse() {
    navBarContent.value!.classList.add('up');
    showDownBtn.value = true;

}

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
    width: 600px;

    .navBarContent {
        position: relative;
        top: 0;
        transition: top .5s ease;

        .navBarItem {
            display: flex;
            justify-content: center;
            border-radius: 10px;

            ul {
                border: 1px solid rgba(9, 10, 11, .05);
                padding: 15px 20px 15px 20px;
                display: flex;
                list-style-type: none;
                justify-content: center;
                gap: 3.5rem;
                font-family: emoji;
                background-color: rgb(255 255 255);
                border-radius: .25rem;
                box-shadow: 0 10px 7px -11px;
                margin-top: 20px;

                li {
                    cursor: pointer;
                    transition: .3s ease-in-out;

                    &:hover {
                        opacity: .3;
                    }

                    &:last-child {
                        display: none;
                    }
                }

                li:first-child {
                    font-weight: 900;
                }

                li:not(:first-child) {
                    font-size: 13px;
                    line-height: 1.8;
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

    @include media-breakpoint-down(md) {
        top: 0;
        width: 100%;

        .navBarContent {
            z-index: 999;
            position: relative;
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

        ul {
            width: 70%;
            gap: 9.5rem !important;

            li:not(:first-child) {
                display: none;
            }

            li {
                font-size: 13px;

                &:last-child {
                    display: block !important;
                }
            }

        }
    }

    @media screen and (max-width:400px) {
        ul {
            gap: 7.5rem !important;
        }
    }
}
</style>