<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import BodyScanLine from '@/assets/img/BodyScanLine.vue';
import Home from '@/assets/img/Home.vue';
import interact from 'interactjs';

export default defineComponent({
    components: {
        BodyScanLine,
        Home
    },
    setup() {
        const router = useRouter()
        const onExit = function () {
            router.go(-1)
        }

        const onHome = function () {
            router.push('/');
        }

        function onListeningBox(el, body): any {
            // const resizable = interact(el);
            // resizable
            //     .resizable({
            //         edges: { top: true, left: true, bottom: true, right: true },
            //         listeners: {
            //             move: function (event) {
            //                 let { x, y } = event.target.dataset

            //                 x = (parseFloat(x) || 0) + event.deltaRect.left
            //                 y = (parseFloat(y) || 0) + event.deltaRect.top

            //                 Object.assign(event.target.style, {
            //                     width: `${event.rect.width}px`,
            //                     height: `${event.rect.height}px`,
            //                     transform: `translate(${x}px, ${y}px)`
            //                 })

            //                 Object.assign(event.target.dataset, { x, y });
            //             }
            //         },
            //         modifiers: [
            //             // keep the edges inside the parent
            //             interact.modifiers.restrictEdges({
            //                 outer: body
            //             }),

            //             // minimum size
            //             interact.modifiers.restrictSize({
            //                 min: { width: 200, height: 200 }
            //             })
            //         ],

            //         inertia: true
            //     })

            const draggable = interact('#drag_wrap');
            draggable
                .draggable({
                    listeners: {
                        move(event) {
                            // var target = event.target
                            var target = document.getElementById('bom')
                            // keep the dragged position in the data-x/data-y attributes
                            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                            // translate the element
                            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                            // update the posiion attributes
                            target.setAttribute('data-x', x);
                            target.setAttribute('data-y', y);
                        }
                    },
                    modifiers: [
                        interact.modifiers.restrictRect({
                            restriction: body
                            // restriction: 'parent'
                        })
                    ]
                }).on('tap', function (event) {
                    // start a drag action to apply modifiers
                    draggable.reflow({ name: 'drag', axis: 'xy' })
                })
        }

        function init() {
            onListeningBox('#bom', 'body');
        }

        init();

        return {
            router,
            onExit,
            onHome
        }
    },
})
</script>

<template>
    <div class="back_btn" id="bom" v-if="!(['/', '/about'].includes(router.currentRoute.value.fullPath))">
        <span class="btn" id="drag_wrap" title="拖拽移动">
            <BodyScanLine />
        </span>
        <span class="btn" title="首页">
            <Home @click="onHome" />
        </span>
        <span class="btn" title="返回上一页" @click="onExit">
            cd ../
        </span>
    </div>
</template>

<style scoped lang="scss">
.back_btn {
    z-index: 100;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 45vh;
    left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.24rem;
    padding: 0.1rem;
    border-radius: 4px;
    background-color: var(--color-bg);
    color: var(--color-contrast-high);

    .btn {
        margin-left: 0.15rem;
        display: flex;
        align-items: center;
    }

    .btn:first-child {
        margin: 0;
    }
}
</style>

