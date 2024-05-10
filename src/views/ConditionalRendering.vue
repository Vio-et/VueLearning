<template>
    <h3>Conditional Rendering</h3>
    <div class="conditional">
        <div v-if="flag">Can you see v-if ?</div>
        <div v-else>Then you can see v-else</div>
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>
        <div v-show="v_showFlg">Can you see v-show?</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            type: 'D',
            v_showFlg: false
        }
    }
}
</script>