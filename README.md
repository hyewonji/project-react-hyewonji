# WWW(world-wide-weather)

### 소개
**세계 수도의 날씨**를 볼 수 있는 웹 페이지 입니다.

수도날씨를 **검색**하고 **추가**할 수 있는 기능을 제공합니다.<br/>

[데모](https://hyewonji.github.io/world-wide-weather/#/)

<br/>

### 페이지 별 기능 

- Login

  <img width="500" alt="Login" src="https://user-images.githubusercontent.com/60416187/113667829-4ccec680-96ec-11eb-8b44-76b1d92dc444.png">

  - State의 accounts에서 `회원정보를 조회`합니다.
  - 회원정보와 일치하면 `로그인 성공,` 일치하지 않으면 `로그인 실패`가 됩니다.
  - 로그인 성공시 State의 login에 `login된 회원정보를 저장`합니다.
    
- Singup

  <img width="500" alt="Signup" src="https://user-images.githubusercontent.com/60416187/113668986-05493a00-96ee-11eb-9c8b-627c80cb89a0.png">
  
  - State의 accounts에 Signup 하려는 `회원정보를 생성`합니다.
  - State의 login에 회원정보를 저장해 바로 `로그인을 허용`합니다.
  
- Add
  
  AddCity_1             |  AddCity_2
  :-------------------------:|:-------------------------:
  <img width="500" alt="AddCity" src="https://user-images.githubusercontent.com/60416187/113667797-417b9b00-96ec-11eb-93ee-e64cd01e100d.png"> | <img width="530" alt="AddCity2" src="https://user-images.githubusercontent.com/60416187/113669017-1003cf00-96ee-11eb-87ef-0cd46f60fa7c.png">

  - 페이지가 로드되면 `현재위치의 날씨`를 보여줍니다.
  - Input창에 원하는 `수도를 검색`하면 해당하는 수도의 `현재 날씨 카드`를 보여줍니다.
  - 날씨카드 하단에  `+Add 버튼`을 클릭하면 '/home'화면에 `날씨카드가 추가`됩니다.
  - 또한, 로그인된 `회원정보(State)에도 저장`됩니다.
  
- Home

  <img width="500" alt="Home" src="https://user-images.githubusercontent.com/60416187/113667822-4b9d9980-96ec-11eb-9b9f-fb1eab7c2fa4.png">
  
  - 로그인된 `회원정보에서 City List`를 불러와 저장된 날씨카드들을 불러옵니다.
  - 날씨카드의 `날씨정보`들은 항상 `실시간`으로 API에서 불러옵니다.
  - `+아이콘`이 있는 카드를 클릭하면 `'/Add'페이지`로 이동합니다.
    
- Navigator

  <img width="500" alt="Navigator" src="https://user-images.githubusercontent.com/60416187/113667753-2f99f800-96ec-11eb-9f38-2d5d0bca2570.png">
  
  - Home('/home'), Add City('/add'), Logout('/') 의 `라우터기능`을 제공합니다.
  - `Logout클릭`시 State의 `Login정보를 제거`해 로그인된 계정이 없도록 합니다.
