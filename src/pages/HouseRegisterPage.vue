<template>
  <div class="page-content">
    <main class="newadd center">
      <h1>숙소 등록하기</h1>
      <div id="main">
        <form name="frmAdd" method="post" action="/rooms/process_add">
          <ul class="type" id="home_type">
            <input
              type="hidden"
              name="home_type_value"
              id="home_type_value"
              value=""
            />
            <li class="title">숙소 형태</li>

            <li class="type">
              <a href="#" data-type="1"> 옥탑 </a>
            </li>
            <li class="type">
              <a href="#" data-type="2"> 주택 </a>
            </li>
            <li class="type">
              <a href="#" data-type="24"> 민박 </a>
            </li>

            <li>
              <div class="selectbox_arr big">
                <span class="op_down"
                  ><span class="glyphicon glyphicon-chevron-down"></span
                ></span>
                <select
                  name="home_type"
                  class="select_normal"
                  id="home_type_sel"
                >
                  <option value="">기타</option>
                  <option value="14">펜션</option>
                  <option value="5">빌라</option>
                  <option value="15">콘도</option>
                  <option value="20">템플스테이</option>
                  <option value="23">기타</option>
                </select>
              </div>
            </li>
          </ul>

          <ul class="type" id="room_type">
            <input
              type="hidden"
              name="room_type_value"
              id="room_type_value"
              value=""
            />
            <li class="title">객실종류</li>
            <li class="type">
              <a href="#" data-type="Entire home/apt"> 집/아파트 전체 </a>
            </li>
            <li class="type">
              <a href="#" data-type="Private room"> 전용실 </a>
            </li>
            <li class="type">
              <a href="#" data-type="Shared room"> 다인실 </a>
            </li>
          </ul>

          <ul class="type circle" id="accommodates">
            <input
              type="hidden"
              name="accommodates_value"
              id="accommodates_value"
              value="2"
            />
            <li class="title">숙박 인원</li>
            <li class="type">
              <a href="#" data-type="1">1</a>
            </li>
            <li class="type">
              <a href="#" data-type="2">2</a>
            </li>
            <li class="type">
              <a href="#" data-type="3">3</a>
            </li>
            <li class="type">
              <a href="#" data-type="4">4</a>
            </li>
            <li class="type">
              <a href="#" data-type="5">5</a>
            </li>
            <li class="type">
              <a href="#" data-type="6">6</a>
            </li>
            <li class="type">
              <a href="#" data-type="7">7</a>
            </li>
            <li class="type">
              <a href="#" data-type="8">8</a>
            </li>

            <li>
              <div class="selectbox_arr big">
                <span class="op_down"
                  ><span class="glyphicon glyphicon-chevron-down"></span
                ></span>
                <select
                  name="accommodates"
                  class="select_normal"
                  id="accommodates_sel"
                >
                  <option value="">기타</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30+</option>
                </select>
              </div>
            </li>
          </ul>
          <div class="input-group">
            <label for="name">숙소 이름 : </label>
            <input class="input-group-type" type="text" id="name" name="name" />
          </div>
          <br />
          <div class="input-group">
            <label for="content">숙소 소개 : </label>
            <input
              class="input-group-type"
              type="text"
              id="content"
              name="content"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="price">숙소 가격 : </label>
            <input
              class="input-group-type"
              type="number"
              id="price"
              name="price"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="address">숙소 주소 : </label><br />
            <input
              class="input-group-type"
              type="text"
              id="address"
              name="address"
            />
          </div>
          <br />
          <div class="input-group">
            <label for="latitude">숙소 위도 : </label><br />
            <input
              class="input-group-type"
              type="number"
              id="latitude"
              name="latitude"
            />
          </div>
          <div class="input-group">
            <label id="longitude" for="longitude">숙소 경도 : </label><br />
            <input
              class="input-group-type"
              type="number"
              id="longitude"
              name="longitude"
            />
          </div>
          <div class="input-group">
            <label id="hasImeage" for="hasImeage">숙소 이미지 : </label>
            <input type="file" id="hasImeage" name="hasImage" /><br />
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
            <a href="#" id="next_btn" class="btn btn_red continue_btn">계속</a>
          </div>
        </form>
      </div>
    </main>

    <nav>
      <div class="container">
        <div class="row">
          <a href="#" class="col on">
            <div class="button_wrap">
              <img
                src="/assets/images/home/nav/campground-solid.svg"
                alt="Home"
                class="over"
                width="100%"
              />
            </div>
            <h2>캠핑온탑</h2>
          </a>
          <a href="#" class="col">
            <div class="button_wrap">
              <img
                src="/assets/images/home/nav/btn_book.png"
                alt="Booking"
                class="off"
                width="100%"
              />
              <img
                src="/assets/images/home/nav/btn_book_h.png"
                alt="Booking"
                class="over"
                width="100%"
              />
            </div>
            <h2>예약</h2>
          </a>
          <a href="#" class="col">
            <div class="button_wrap">
              <img
                src="/assets/images/home/nav/btn_msg.png"
                alt="Message"
                class="off"
                width="100%"
              />
              <img
                src="/assets/images/home/nav/btn_msg_h.png"
                alt="Message"
                class="over"
                width="100%"
              />
            </div>
            <h2>메시지</h2>
          </a>
          <a href="#" class="col">
            <div class="button_wrap">
              <img
                src="/assets/images/home/nav/btn_profile.png"
                alt="Profile"
                class="off"
                width="100%"
              />
              <img
                src="/assets/images/home/nav/btn_profile_h.png"
                alt="Profile"
                class="over"
                width="100%"
              />
            </div>
            <h2>로그인</h2>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ProductRegistrationPage",
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
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 5000px;
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
