<template>
  <div class="calculation-container">
    
    <div class="input-container">
      <label for="number1">Số thứ nhất: </label>
      <input v-model.number="number1" type="number" id="number1" />
    </div>
    
    <div class="input-container">
      <label for="number2">Số thứ hai: </label>
      <input v-model.number="number2" type="number" id="number2" />
    </div>

    <div class="results-container">
      <p>Tổng: {{ add() }}</p>
      <p>Hiệu: {{ subtract() }}</p>
      <p>Tích: {{ multiply() }}</p>
      <p>Thương: {{ divide() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0
    };
  },
  methods: {
    add() {
      return this.number1 + this.number2;
    },
    subtract() {
      return this.number1 - this.number2;
    },
    multiply() {
      return this.number1 * this.number2;
    },
    divide() {
      return this.number2 !== 0 ? this.number1 / this.number2 : 'Không thể chia cho 0';
    }
  }
};
</script>

<style scoped>
.calculation-container {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.input-container {
  margin-bottom: 10px;
}

.results-container {
  margin-top: 20px;
}
</style>
