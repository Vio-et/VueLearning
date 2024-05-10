<template>
  <div class="test">
    <h3>Example Grammer</h3>
    <p>{{ msg }}</p>
    <p>{{ number + 1}}</p>
    <p>{{ ok ? 'Yes' : 'No' }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ rawHtml }}</p>
    <p v-html = "rawHtml"></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
          msg:"Magic Grammer",
          number: 10,
          ok: true,
          message: "Hello Vue",
          rawHtml: "<a href='https://www.bupt.edu.cn/'>BUPT</a>"
        }
    }
}

</script>

<style>

</style>