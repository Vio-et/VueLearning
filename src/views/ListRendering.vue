<template>
    <h3>List Rendering</h3>
    <div class="list">
        <p v-for="(name,index) of names">{{ name }}-{{ index }}</p>
        <div v-for="item in result">
            <p> {{ item.title }}</p>
            <img :src="item.avator">
        </div>
        <div>
            <p v-for="(value, key, index) of userInfo">{{ value }}-{{ key }}-{{ index }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ['Orlando', 'Rebeca', 'Violet'],
            result: [
                {
                    "id": 1,
                    "title": "Captin",
                    "avator": "Luffy"
                },
                {
                    "id": 2,
                    "title": "Knife",
                    "avator": "Zoro"
                },
                {
                    "id": 3,
                    "title": "Navigator",
                    "avator": "Namy"
                },
            ],
            userInfo: {
                name: 'Orlando',
                sex: 'man',
                age: 20
            }
        }
    }
}
</script>