<template>
  <div class='attribute'>
    <div v-bind:id="dynamicId" :class="dynamicClass" :title="dynamicTitile">AppID</div>
    <button :disabled="isButtonDisabled" >Button</button>
    <div v-bind="ObjectOfAttrs">Object Test</div>
  </div>
  
</template>

<script>

export default{
    data(){
        return {
            mag: "Active",
            dynamicId: "appiId",
            dynamicClass: "appClass",
            dynamicTitile: "title",
            isButtonDisabled: true,
            ObjectOfAttrs: {
                dynamicClass: "appClass",
                dynamicId: "appId"
            }
        }
    }
}

</script>

