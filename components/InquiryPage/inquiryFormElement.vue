<template>       
    <b-form-group 
        :label="item.label"
        :lable-for="item.id"
    >
        <b-form-input
            :id="item.id"
            required
            :type="item.type"
        ></b-form-input>
    </b-form-group>      
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

</style>
