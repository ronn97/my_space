<script>
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router'
import config from '../../../package.json';
import moment from 'moment';
export default defineComponent({
    setup() {
        const footText = reactive({
            name: config.name,
            version: config.version
        })

        const router = useRouter()
        const onExit = function () {
            router.go(-1)
        }

        return {
            footText,
            moment,
            router,
            onExit
        }
    },
})
</script>

<template>
    <div id="foot">
        <div class="back_btn" v-if="!(['/', '/about'].includes(router.currentRoute.value.fullPath))">
            <span @click="onExit">
                cd ../
            </span>
        </div>

        <div class="foot_text">
            CC {{ footText.name + ' ' + footText.version + ' ' + moment().format('YYYY') + '© Ronn Zhou' }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
#foot {
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);

    font-size: 0.2rem;
    text-align: center;
    color: #aaa;

    .back_btn {
        cursor: pointer;
    }
}
</style>