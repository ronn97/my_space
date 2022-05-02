<script>
import { defineComponent, reactive } from 'vue';
import config from '../../../package.json';
import moment from 'moment';
export default defineComponent({
    setup() {
        const footText = reactive({
            name: config.name,
            version: config.version
        })
        return {
            footText,
            moment
        }
    },
})
</script>

<template>
    <div id="foot">
        CC {{ footText.name + ' ' + footText.version + ' ' + moment().format('YYYY') + '© Ronn Zhou' }}
    </div>
</template>

<style scoped>
#foot {
    font-size: 0.2rem;
    text-align: center;
    color: #aaa;
}
</style>