<template>
  <div class="page-content">
    <main class="newadd center">
      <h1 class = "register_">숙소 등록</h1>
      <div id="main">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="input-group">
            <label for="name">이름: </label>
            <input class="input-group-type" type="text" id="name" name="name" />
          </div>
          <br />
          <div class="input-group">
            <label for="content">소개: </label>
            <input
              class="input-group-type"
              type="text"
              id="content"
              name="content"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="price">이용 가격: </label>
            <input
              class="input-group-type"
              type="number"
              id="price"
              name="price"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="address">주소: </label><br />
            <input
              class="input-group-type"
              type="text"
              id="address"
              name="address"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="latitude">위도: </label><br />
            <input type="number" id="latitude" name="latitude" />
          </div>
          <div class="input-group">
            <label id="longitude" for="longitude">경도: </label><br />
            <input type="number" id="longitude" name="longitude" />
          </div>
          <div class="input-group">
            <label for="maxUser">최대 인원: </label>
            <input class="input-group-type" type="text" id="name" name="name" />
          </div>
          <div class="input-group">
            <label id="uploadFile" for="hasImage">이미지 : </label>
            <input
              type="file"
              id="hasImage"
              name="uploadFiles"
              @change="handleFileUpload"
              multiple
            /><br />
          </div>
          <br class="checkbox" />
          <h2 id="option">옵션</h2>
          <div class="checkbox">
            <div>
              <label for="hasAirConditioner">에어컨 </label><br />
              <input
                type="checkbox"
                id="hasAirConditioner"
                name="hasAirConditioner"
              /><br />
            </div>
            <div>
              <label for="hasWashingMachine">세탁기 </label><br />
              <input
                type="checkbox"
                id="hasWashingMachine"
                name="hasWashingMachine"
              /><br />
            </div>
            <div>
              <label for="hasBed">침대 </label><br />
              <input type="checkbox" id="hasBed" name="hasBed" /><br />
            </div>
            <div>
              <label for="hasHeater">히터 </label><br />
              <input type="checkbox" id="hasHeater" name="hasHeater" /><br />
            </div>
          </div>

          <div class="btns">
            <button
              type="submit"
              id="next_btn"
              class="btn btn_red continue_btn"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useHouseStore } from "/src/stores/useHouseStore";

export default {
  name: "HouseRegisterPage",
  data() {
    return {
      formData: {
        name: "",
        content: "",
        price: 0,
        address: "",
        latitude: 0,
        longitude: 0,
        maxUser: 0,
        hasAirConditioner: false,
        hasWashingMachine: false,
        hasBed: false,
        hasHeater: false,
        uploadFiles: [],
      },
    };
  },
  computed: {
    ...mapStores(useHouseStore),
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.houseStore.createHouse(this.formData);

        console.log("House created successfully:", response);
      } catch (error) {
        console.error("Error creating house:", error);
      }
    },
    handleFileUpload(event) {
      this.formData.uploadFiles = Array.from(event.target.files);
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  display: block;
  justify-content: center;
  padding-top: 50px;
}
#main {
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

form {
  width: 1000px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 5000px;
}
.register_ {
  margin: 60px;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

#product_Registration {
  font-size: 2em;
  color: #333;
  text-align: center;
  padding-bottom: 1em;
}

/* Custom CSS for checkbox */
.product_Registration .checkbox-group {
  display: block;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Custom CSS for maxUser */
.product_Registration #maxUser {
  width: 50%;
}

.checkbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.checkbox div {
  margin-right: -100px;
}

.checkbox label,
.checkbox input {
  display: inline-block;
}

input[type="text"],
input[type="number"] {
  width: 700px;
}

.input-group {
  margin-bottom: 20px;
  width: 1300px;
}

.input-group label {
  display: block;
  font-size: 1.8em;
  margin-bottom: 0px;
}

.input-group,
.checkbox,
.btns {
  margin-left: 0px;
}

.input-group label,
.checkbox label {
  display: inline-block;
  width: 200px;
}

#next_btn {
  text-align: center;
  margin-top: 25px;
}

.selected {
  background-color: #6800cd;
  /* 보라색 배경 */
  color: white;
  /* 흰색 텍스트 */
}

#longitude {
  position: relative;
  top: 15px;
}

#hasImeage {
  position: relative;
  top: 22px;
}

:root {
  --wehome-color: #6800cd;
}

/* initial */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
  color: #202020;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

img,
fieldset {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
}

caption,
th {
  text-align: left;
}

q:before,
q:after {
  content: "";
}

/* page default style */
a,
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
}

main.admin ul.table li span.cell {
  padding: 10px 0;
  font-size: 20px;
}

main.newadd {
  margin-bottom: 100px;
}

main.newadd h1 {
  font-size: 48px;
  text-align: center;
  margin-top: 100px;
}

main.newadd h2 {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
  display: block;
}

main.newadd ul.type {
  overflow: hidden;
  margin-bottom: 30px;
  margin-top: 50px;
}

main.newadd ul.type li {
  float: left;
}

main.newadd ul.type li.title {
  font-size: 24px;
  width: 220px;
  line-height: 51px;
}

main.newadd ul.type li.type {
  margin-right: 20px;
}

main.newadd ul.type li.type a {
  text-align: center;
  display: block;
  font-size: 18px;
  color: #202020;
  padding: 5px 10px;
}

main.newadd ul.circle li.type a {
  border: 2px solid #999;
  color: #999;
  border-radius: 50%;
  font-size: 30px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  padding: 0;
}

main.newadd ul.type li div.selectbox_arr {
  margin-top: 5px;
}

main.newadd div.btns {
  text-align: center;
}

main.newadd div.btns a.btn {
  padding: 0 100px;
}
</style>
