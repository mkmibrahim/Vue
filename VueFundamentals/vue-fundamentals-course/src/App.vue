<script setup>
import { ref, computed } from 'vue'

const header = ref('Instrument App')
const characterCount = computed(() => {
  return newProp.value.length
})
const editing = ref(false)
const items = ref([
  {
    id: 1, 
    label: "instrument name", 
    enabled: true,
    CustomProperty: false
  },
  {
    id: 2, 
    label: "instrument datasheet", 
    enabled: false,
    CCustomProperty: false
  },
  {
    id: 3, 
    label: "measurement", 
    enabled: true,
    CCustomProperty: false
  },
  {
    id: 4, 
    label: "status", 
    enabled: false,
    CustomProperty: false
  },
  {
    id: 5, 
    label: "status2", 
    enabled: true,
    CustomProperty: true
  }
])

const newProp = ref("")
const AssetStatusActive = ref('false')
const instrumentColor = ref([])
const saveProp = ()=>{
  items.value.push(
    {
      id: items.value.length+1, 
      label: newProp.value,
      enabled: !AssetStatusActive.value})
  newProp.value=""
  AssetStatusActive.value = ""
}

const doEdit = (e) => {
  editing.value = e
  newProp.value = ""
}

const toggleEnabled = (item) => {
  item.enabled = !item.enabled
}
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Property
    </button>
  </div>
  
  <form 
   class="add-item-form"
        v-if="editing"
   @submit.prevent="saveProp" 
  >
  	<input 
     v-model.trim="newProp" 
     type="text" 
     placeholder="Add a property2" >
    <label>
     <input type="checkbox" v-model="AssetStatusActive">
     Active
    </label>
  	<br />
    <button 
       :disabled="newProp.length < 5"
            class="btn btn-primary"
    >
      Save Item
    </button>
   </form>
 <!-- <div class="add-item-form">
  	<input 
     v-model.trim="newProp" 
     v-on:keyup.enter="items.push({id: items.length+1, label: newProp})"
     type="text" 
     placeholder="Add a property2" >
    <label>
     <input type="checkbox" v-model="AssetStausActive">
     Active
    </label>
  	<br />
    <button v-on:click="items.push({id: items.length+1, label: newProp})" 
            class="btn btn-primary"
    >
      Save Item
    </button>
   </div>  -->
 <p class="counter">
   {{characterCount}}
  </p>
 <ul>
    <li 
      v-for="(item, index) in items" 
      @click="toggleEnabled(item)"
      :key="item.id"
        class="static-class"
      :class="{
        strikeout: item.enabled, 
        priority: item.CustomProperty}">
      {{item.label}}
    </li>
   
   
  </ul>
  <p v-if="!items.length">
    No properties defined
  </p>
</template>