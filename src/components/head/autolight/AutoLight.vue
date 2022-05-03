<script>
import { defineComponent, ref, nextTick } from 'vue';
import Light from '@/assets/img/Light.vue';
import Night from '@/assets/img/Night.vue';
import { usePreferredColorScheme } from '@vueuse/core'

export default defineComponent({
    components: {
        Light,
        Night,
    },
    setup() {
        const preferredColor = usePreferredColorScheme()
        const currentTheme = ref(true)

        /* 设置根元素的换肤属性 */
        function addBodyAttr(mode, removeClass) {
            document.documentElement.setAttribute(mode, mode)
            document.documentElement.removeAttribute(removeClass)
        }


        function onThemeCut() {
            nextTick(_ => {
                setTimeout(() => {
                    changeMode(preferredColor.value)
                    currentTheme.value = preferredColor.value
                }, 100);
            })
            window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
                console.log('运行')
                nextTick(_ => {
                    setTimeout(() => {
                        changeMode(preferredColor.value)
                    }, 100);
                })
            })
        }

        /* 点击图标换肤 */
        function changeMode(mode) {
            const modeMap = {
                light: _ => {
                    currentTheme.value = 'light'
                    addBodyAttr('light', 'dark')
                },
                dark: _ => {
                    currentTheme.value = 'dark'
                    addBodyAttr('dark', 'light')
                },
                'no-preference': _ => {
                    currentTheme.value = 'light'
                    addBodyAttr('light', 'dark')
                }
            }
            return modeMap[mode]()
        }

        function init() {
            onThemeCut()
        }

        init()

        return {
            preferredColor,
            changeMode,
            currentTheme,
        }
    },
})
</script>

<template>
    <div class="auto_light">
        <Light class="icon-size half-gray-128" @click="changeMode('dark')" v-if="currentTheme === 'light'" />
        <Night class="icon-size half-gray-128" @click="changeMode('light')" v-if="currentTheme === 'dark'" />
    </div>
</template>

<style scoped>
.auto_light {
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
}
</style>