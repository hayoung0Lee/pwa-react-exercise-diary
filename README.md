# pwa-react-exercise-diary
또..거금을 들여서 PT를 받는데 이번엔 운동일지도 좀 제대로 써보고싶다. 

## Setting React application with Parcel
https://blog.jakoblind.no/react-parcel/
위의 글을 보고 parcel을 이용해서 설정을 했다. 

그리고 추가적으로 
```
npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```
을 통해서 eslint 와 prettier 설정을 했다. 


## PWA setting
https://www.youtube.com/watch?v=E8BeSSdIUW4&ab_channel=vaadinofficial

### webmanifest
- [한국어자료](https://uxgjs.tistory.com/225)
- [webmanifest](https://web.dev/add-manifest/)
오프라인에서 동작하는 웹앱을 만들기 위해 필요하다. 
manifest 파일을 작성한것은 developers tool -> application -> manifest 를 이용하면 좀더 쉽게 이해할 수 있다. 
- parcel에서 다른 튜토리얼 따라해봐도 잘 안되서 아래의 패키지를 이용했다. 
https://www.npmjs.com/package/parcel-plugin-pwa-manifest
https://laptrinhx.com/a-plugin-for-parcel-to-generate-a-service-worker-with-workbox-3359488880/

### service worker 설정하기
- parcel + serviceworker
[결국 참고한 자료])https://www.bha.ee/how-to-make-your-parcel-js-app-progressive/)

Parcel로 뭔가를 설정을 할려고했더니 어려운 점이 많았다. 앞으로는 pwa는 cra로 하는걸로 하자


## devtools 에 add to home screen 없어짐
https://stackoverflow.com/questions/58128145/add-to-homescreen-link-missing-in-chrome-devtools

이걸 겨우 찾았다. 그냥 + 버튼 눌러라. 

## 내 모바일에서 내 데탑 로컬호스트로 접근하기
`ifconfig | grep "inet " | grep -v 127.0.0.1`

워 된다. 나는 아이폰이라 safari에서 위의 명령에서 나온 주소로 접근해서 add to home screen 해서 다운로드 받았다.

[manifest 파일과 service worker파일](https://altenull.github.io/2018/03/09/%EC%9B%B9%EC%95%B1-%EB%A7%A4%EB%8B%88%ED%8E%98%EC%8A%A4%ED%8A%B8-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9B%8C%EC%BB%A4-Web-App-Manifest-Service-Worker/)