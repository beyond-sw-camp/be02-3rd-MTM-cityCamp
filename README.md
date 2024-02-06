# 🏕️ 캠핑온탑 campingOnTop

![캠핑온탑 로고](https://github.com/Tesssssssssy/HanwhaBC-be02-campingOnTop-config/assets/105422037/177289fc-5e89-4907-aea1-c5eb453c4059)
![캠핑온탑-001](https://github.com/beyond-sw-camp/be02-2nd-MTM-cityCamp/assets/105422037/90d4ac16-a769-498b-912a-7ca4265230ad)

- 배포 URL : [campingOnTop](http://www.campingontop.kro.kr)

<br>
<br>

# 💪 팀원 구성

<div align="left">

|                    **임태우**                    |                 **길민석**                 |                **한경훈**                |                   **이준국**                    |                **장대현**                |
| :----------------------------------------------: | :----------------------------------------: | :--------------------------------------: | :---------------------------------------------: | :--------------------------------------: |
| [@Tesssssssssy](https://github.com/Tesssssssssy) | [@gilms0730](https://github.com/gilms0730) | [@Kyungqq](https://github.com/heejiyang) | [ @Lee-Jun-Guk](https://github.com/Lee-Jun-Guk) | [@poil4291](https://github.com/poil4291) |

</div>

<br>
<br>

# ✒️ 사용 기술 스택
<br>
Vue.js
<details>
 <summary><b>설명</b></summary>
  - 컴포넌트 기반의 모듈화로 코드를 재사용하며 유지보수가 간편해집니다. <br>
  - 데이터 바인딩을 통해 모델과 뷰를 손쉽게 동기화할 수 있으며, 가상 DOM을 활용하여 실제 DOM 조작을 최소화하여 성능을 향상시킵니다.
  </details>
 JWT
<details>
 <summary><b>설명</b></summary>
- 페이로드에 필요한 사용자 정의 데이터를 포함할 수 있어, 다양한 환경에서 다양한 요구사항을 충족합니다. <br>
 - JWT는 표준 규격을 따르고 있어, 이를 지원하는 다양한 라이브러리와 플랫폼에서 쉽게 사용할 수 있습니다. 이는 서비스 간의 상호 운용성을 향상시킵니다.<br>
 - JWT는 JSON 형식을 사용하며, 정보를 포함하는 데 필요한 최소한의 필드만을 가지고 있습니다. 이는 토큰 크기를 작게 유지하면서 필요한 정보를 전송하는 데 효과적입니다.
  </details>
 MySQL 8.0.32
<details>
 <summary><b>설명</b></summary>
 - Amazon RDS 서버에 MySQL 8.0.32 버전을 배포하였습니다.
 <br>
  - Amazon RDS를 활용하여 데이터베이스를 관리하며, 안정적인 운영 환경을 제공합니다.

   </details>
 Spring 서버 배포(AWS EC2)
<details>
 <summary><b>설명</b></summary>
  - Nginx의 설정 파일을 수정하여 Spring Config 서버로의 요청을 프록시하도록 했습니다.<br>
  - 이를 통해 클라이언트는 Nginx를 통해 Spring Config 서버에 접속할 수 있습니다. <br>
  또한 도메인을 구성하여 클라이언트가 EC2에 쉽게 접속할 수 있도록 하였습니다. <br>
   <a href="http://www.campingontop.kro.kr/" target="_blank">http://www.campingontop.kro.kr/</a>
</details>

 Spring Config 서버 배포(AWS EC2)
<details>
 <summary><b>설명</b></summary>
- Spring Config 서버를 EC2 인스턴스에 배포했습니다.

</details>
<br />
<div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D" />

  <br>

  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white" />

  <br>

  <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Conda-Forge&logoColor=white" />

  <br>

  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

  <br>

  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>

  <br />
</div>

# 🖥️ System Architecture

[campingOnTop System Architecture](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/105422037/a2298147-69fa-405e-9485-79b89b706371)

<br>
<br>

# 📷 Figma

[campingOnTop Figma](https://www.figma.com/file/JeGMJmeA0suRljrCCnQ7Ny/campingOnTop-Figma?type=design&node-id=0-1&mode=design&t=ED4wl242eXWHWpMy-0)

<br>
<br>

# 상세 기능

<details>
  <summary><b style="font-size: 18px;">페이지 별 기능</b></summary>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">초기화면</b></summary>

[campingOnTop Home 조회 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/63df35da-793e-4c6c-8f38-624c47384d2d)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">회원가입</b></summary>

[campingOnTop 회원가입 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/36f39df2-6d8d-4686-837f-99a0a8bb81e1)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">이메일 인증</b></summary>

[campingOnTop 이메일 인증 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/d12f7db7-97cf-4c2e-8c33-fb19a145a93b)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">로그인</b></summary>

[campingOnTop 로그인 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/784671b6-f2ef-4d62-91a9-d6c7abe13d5e)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">로그아웃</b></summary>

[campingOnTop 로그아웃 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/a85336c7-2074-4d74-83bb-126256a78c08)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">숙소 검색</b></summary>

[campingOnTop 이름으로 검색 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/c6b5b0cf-29f4-4297-9d39-d4116f0ecb68)
<br>  
[campingOnTop 주소로 검색 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/5a1a9497-a53e-44f3-a110-2a9e66ac481a)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">숙소 등록</b></summary>

[campingOnTop 숙소 등록 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/e43b04bc-8481-4b56-9b46-34f04bb8bc6f
)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">좋아요</b></summary>

[campingOnTop 좋아요 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/9383cf9a-8d7e-4def-8a6e-2ad7206f0722)

</details>

<details>
  <summary style="margin-left: 20px;"><b style="font-size: 16px;">장바구니</b></summary>

[campingOnTop 장바구니 기능 시연](https://github.com/beyond-sw-camp/be02-3rd-MTM-cityCamp/assets/144295389/83215b61-a975-4c3b-85ba-aced116884e3)

</details>
</details>
