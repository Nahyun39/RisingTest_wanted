import styled from 'styled-components';
import { InsightData } from '../../data/Insight'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import { PrevArrowBtn, NextArrowBtn } from "../common/ArrowBtns";
import CareerCard from "../common/CareerCard";
import axios from 'axios';


const categories = [
    'IT/기술',
    '개발',
    '취업/이직',
    'MD',
    'HR',
    '서비스기획',
    '마케팅',
    '조직문화',
    '경영/전략',
    '커리어고민',
    'UX/UI',
    '인간관계',
    '데이터',
    '콘텐츠 제작',
    '브랜딩',
    '노무',

];

const listData = [
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Flzk%2Fimage%2FI-BLxnzO0doYM_RkZa9EH6Nchas.jpg&w=750&q=100",
        title: "공룡도 철수하는 새벽배송을 위한 변명",
        desc: "1. 이 글은 커넥터스가 만드는 큐레이션 뉴스레터 '커넥트레터'의 6월 16일 목요...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
        infoIconAlt: "brunch",
        info: "엄지용",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220228%2F5%2F12657416.jpg&w=750&q=100",
        title: "LINE X Wanted Session1-1",
        desc: "일을 하다보면 이런 얘기를 종종 듣게 됩니다. '우리도 이제 애자일하게 일...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 김유진",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F30421546.jpg&w=750&q=100",
        title: "LINE X Wanted Session5-2",
        desc: "꼭 조직에서, 업무에서만 애자일을 적용하는 걸까요? 개인의 역량을 개발하...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 고종범",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220307%2F9%2F98169082.jpg&w=750&q=100",
        title: "LINE X Wanted Session 2-3",
        desc: "원 팀'을 만들기 위해 필요한 것은 무엇일까요? 우리는 '원 팀'이 맞을까요?...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 윤영경",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220307%2F9%2F96130399.jpg&w=750&q=100",
        title: "LINE X Wanted Session 2-4",
        desc: "지금 당신의 팀은 어떻게 목표를 세우고 있나요? 이번 영상에서는 OKR을...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 김유진",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F1J9E%2Fimage%2FiTeTHvALhsR6vrc4qQcHraqTC9Q.png&w=750&q=100",
        title: "넷플릭스와 애플의 엇갈린 행보가 보여주는 것",
        desc: "아래 글은 2022년 05월 11일에 발행된 뉴스레터에 실린 글입니다. 전체...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
        infoIconAlt: "brunch",
        info: "기묘한",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220315%2F1%2F26433121.jpg&w=750&q=100",
        title: "LINE X Wanted Session 3-6",
        desc: "지금까지의 영상에서 스크럼에 대해 다뤘다면 이번 영상에서는 칸반에 대해...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 윤인석",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220401%2F8%2F75045547.jpg&w=750&q=100",
        title: "데이터가 흐르는 회사 만들기 with 앰플리튜드 - 최종원",
        desc: "원티드에서 앰플리튜드를 활용해 '데이터가 흐르는'조직 시스템을 구축한...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "원티드랩 최종원",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Flzk%2Fimage%2FI-BLxnzO0doYM_RkZa9EH6Nchas.jpg&w=750&q=100",
        title: "입장에 맞춰 맥락을 나눈 BoundedContext",
        desc: "DDD 에서 소개된 표현이고 MSA 채용에 있어 필수적이라고 할 수 있는 느슨한 연...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
        infoIconAlt: "brunch",
        info: "안영회 습작",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220311%2F5%2F44313850.jpg&w=750&q=100",
        title: "모두가 사랑할 프로덕트 기획여정",
        desc: "시장을 검증하기 위해 최소 개발 스펙 프로덕트인 MVP에 대해서 많이들...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "플라브 코퍼레이션, 박상욱",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2579%2F0622e7d9.jpg&w=1200&q=90",
        title: "IT 기술이 만드는 풀필먼트 서비스, '파스토'",
        desc: "파스토는 기존의 물류업체들이 제공하는 서비스와 구체적으로 어떤 차별화된...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "Wanted",
    },
    {
        subject: "IT/기술",
        thumNail:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F54850213.jpg&w=750&q=100",
        title: "LINE X Wanted Session 5-3",
        desc: "지금까지 팀에 애자일을 도입하고 팀에 적용하는 구체적인 방법에 대해...",
        infoIcon:
          "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
        infoIconAlt: "wanted",
        info: "라인플러스 김유진",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&w=500&q=75",
      title: "변화를 즐기는 팀을 만들어볼까요? - 김윤혁",
      desc: "혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한방향으로 움직여야지만 해결할 수 있는 미션이...",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "강남언니 김윤혁",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F9%2F96649545.jpg&w=500&q=75",
      title: "복잡한 시대, 리더가 유지해야 할 것과 유발해야 할 것 - 정영재",
      desc: "지금 조직들이 가장 많이 스터디하고 있는 'Agile'에 대한 이해를 통해 바람직한 리더의 역할을 고민해 보고자 합니다. 불확실성을 제거하는데 가장 중요한 민첩성 agility과 바뀌고 있는 구성원을 동기부여 하는데 적합한 변수들 variables에 대해 국내 실증 연구결과를 바탕으로 소개합니다. 최근 Hot 하다고 하는 '권한위임, 협업, 내적동기부여, 주도성, 적응성, 회복력, 공정성' 등이 왜 Hot한 지 그 이유를 찾게 될 것입니다.",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "LS그룹 정영재",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211125%2F13%2F53893575.jpg&w=500&q=75",
      title: "부하직원이 말하지 않는 31가지 진실",
      desc: "리더십은 함께 일하고 따르는 사람들을 통해 완성됩니다. 이번 Talk에서는 리더의 자기 인식, 구성원 동기유발, 사람을 보는 안목, 일하는 방법과 환경과 관련된 리더가 흔하게 빠지기 쉬운 31가지의 착각을 소개합니다.",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "박태현",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211202%2F8%2F63480345.jpg&w=500&q=75",
      title: "온몸으로 소통하는 리더십이란?",
      desc: "대한민국 수소자동차와 전기차의 과거부터 현재를 함께한 최고의 엔지니어이자, 조직문화라는 개념 자체가 희미했던 시대에 신뢰를 기반으로 하는 조직문화를 만들고 지켜온 조직개발 전문가 안병기님을 모셨습니다. 자신의 어깨를 내어주어 후배들이 더 높은 곳으로 비약할 수 있도록 독려해주는, ‘거인의 어깨’를 가진 리더들이 많아지는 사회를 꿈꾼다고 하시는데요, 리더가 보고 듣고 말하고 생각할 때 참고할 수 있는 이야기부터 리더라면 이런 상황에서 어떤 마음을 가져야 하는지, 후배들에게 어떤 유산을 남겨야 하는지에 대한 고민을 이 영상에서 나누려고 합니다.",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "안병기",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FYdQ%2Fimage%2F5U2qb1So5dhYngtNyEuYPEJoaDo.png&w=500&q=75",
      title: "리더와 구성원의 관계",
      desc: "옛날 이야기이긴 하지만 저는 GOP라 부르는 곳에서 군 복무를 했습니다. 당연히 초소 근무가 주된 임무라고 할 수 있을 겁니다. 초소에는 기본적으로 사수와 부사수가 있습니다. 원칙론으로 사수는 전방 경계를, 부사수는 후방 경계를 했지요. 사수가 아무리 뛰어나도 부사수의 후방 경계가 제대로 되지 않으면 결국 놓치는 곳이 생기게 됩니다. 마찬가지로 부사수가 아",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "Opellie",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75",
      title: "리더십 큐레이션 _ 이견을 듣는 리더",
      desc: "◆ 다른 의견을 듣는 것은 나의 부족함을 인정하는 것이 아니라, 팀과 조직에게 더 나은 결정을 하는 가장 좋은 방법이기 때문입니다.  ① 일본 고등학교 야구에서 나온 꼰대 심판의 모습이 가관입니다. 1)  ‘나를 거스르기 때문에 이렇게 되는거다. 내 뜻을 거역하니 스트라이크도 볼이 되는 것’라고 말하는 심판, 자주 상위권에 올라가는 야구 잘하는 2팀에게 4",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "그로플 백종화",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F28666531.jpg&w=500&q=75",
      title: "변화를 즐기는 팀을 만들어볼까요? - 김윤혁",
      desc: "혼자서는 해낼 수 없는, 여러 명이 함께 그리고 한방향으로 움직여야지만 해결할 수 있는 미션이...",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "강남언니 김윤혁",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211012%2F2%2F24297896.jpg&w=500&q=75",
      title: "CEO 출신 코치들의 경영자 코칭",
      desc: "이제는 한국에도 포춘 500대 기업처럼, 그리고 실리콘밸리처럼 코치 문화가 필요합니다. 포스코에너지 CEO 출신 코치의 라이브톡을 통해 CEO와 리더가 기업을 변화시키기 위해 어떤 성찰을 하고 어떤 리더십을 발휘해야 할지 알아보세요!",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "코칭경영원 윤동준",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F0%2F52509599.jpg&w=500&q=75",
      title: "패널토론 Leadership Paradigm Shift - 문예진, 정영재, 김희봉",
      desc: "Leadership Paradigm Shift와 관련된 다양한 질문에 대한 해답을 영상을 통해 확인해보세요!",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "LS그룹 정영재, 현대자동차그룹 인재개밸원 김희봉",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F5DJL%2Fimage%2Fm9--IoYsovS8U8IxLTu2jKxiHCQ.jpeg&w=500&q=75",
      title: "스우파 아이키님을 통해 배운 스타트업 리더십",
      desc: "엠넷에서 방송하는 스트릿 우먼 파이터(이하 스우파)에는 국내 최고 수준의 실력을 가진 댄스팀 크루들이 출연하고 있고 각 팀에는 다양한 개성을 가진 리더들이 있다.  모든 리더들이 저만의 강점이 있지만 내가 가장 공감했고 배울 점을 느꼈고 스타트업에 fit 한 리더는 아이키님이라고 생각한다.   아이키는 인스타그램 팔로워 57만 명, 틱톡에서는 무려 87만 ",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "David",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F246x%2Fimage%2FJgxDcJEbZQqujGv6y-SeH23OMDc.jpeg&w=500&q=75",
      title: "팀 사이드 프로젝트 오래하는 법",
      desc: "사이드 프로젝트로 진행한 다이어리 앱 모지또가 세상에 나온 뒤 1년하고도 5개월 정도가 지났다. 팀원들과는 앱 출시 7개월 전에 처음 만났으니 우리 팀의 인연이 벌써 2년이나 되었다.  약 2년 동안의 기간 동안 팀원들과 앱을 준비하고 운영하며 참 많은 일들이 있었다. 다행히도 대부분이 좋은 일들이었고 덕분에 팀원들과 계속해서 즐겁게 함께 하는 중이다.  ",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "이준우",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FVZ4%2Fimage%2FD48lhZNwxhhIMgNerFH-NCrYzpI.png&w=500&q=75",
      title: "노션 활용도를 높이는 법",
      desc: "조직의 업무 효율 향상을 위한 컨설팅을 시작한 지 1년이 넘었습니다. 생산성 컨설턴트로 활동하고 있지만 대부분 노션 컨설팅이 주를 이루었죠. 하지만 소규모 조직이나 사업 자체를 처음 시작하는 사람들에겐 노션뿐만 아니라 구글 워크스페이스, 잔디, 슬랙, 플로우, 먼데이닷컴 등 다양한 생산성 도구들을 이용해 그들의 업무 방식에 맞는 컨설팅을 진행했습니다. 노션",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "Brown Jeon",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75",
      title: "신임리더의 실패가 흔한 이유",
      desc: "'있으나 마나한 무능한 팀장때문에 내가 실질적인 팀장 역할을 해왔다' 하는 이들을 흔하게 본다. 핵심인재라 육성되고, 공공연히 차기 리더로 인식되거나 가장 전문가라 하는 이들이 주로 해당된다. 막말로 '내가 발로 해도 저 인간보단 잘하겠다'하던 이들도 팀장 첫해엔 온갖 멘붕과 시행착오를 겪는다. 바라던 리더 자리였건만 왜 이리 회의는 많고, 왜 이리 이슈는",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "ssoo",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75",
      title: "리더십 큐레이션 _ 정답은 없습니다.",
      desc: "◆ 세상에 정답은 없습니다. 성공한 리더도 정답을 알 수 없죠.  ① 스타트업에서 볼 수 있는 문화입니다. 이를 ‘심리적 안전감’이라고 부르죠. 일반적인 조직에서는 리더 특히 성공한 경험을 가진 리더의 지식과 경험에 반대되는 의견을 내는 것이 어렵습니다. 하지만 스타트업의 많은 조직들에서는 리더의 지식과 경험에 동의하거나 더하거나 심지어 반대하는 의견도 자",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "그로플 백종화",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75",
      title: "리더십 큐레이션 _ 이견을 듣는 리더",
      desc: "◆ 다른 의견을 듣는 것은 나의 부족함을 인정하는 것이 아니라, 팀과 조직에게 더 나은 결정을 하는 가장 좋은 방법이기 때문입니다.  ① 일본 고등학교 야구에서 나온 꼰대 심판의 모습이 가관입니다. 1)  ‘나를 거스르기 때문에 이렇게 되는거다. 내 뜻을 거역하니 스트라이크도 볼이 되는 것’라고 말하는 심판, 자주 상위권에 올라가는 야구 잘하는 2팀에게 4",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "그로플 백종화",
    },
    {
      subject: "리더십",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FbFXF%2Fimage%2FX1uUtisrD7d4m7hWtwV5rVLys6o.jpeg&w=500&q=75",
      title: "구성원을 성장시키자",
      desc: "구성원의 성장이 곧 조직의 성장이다  소프트웨어를 업그레이드하면 낡은 코드를 버리고 새 코드를 설치한다. 기계를 업그레이드하면 낡은 부품을 버리고 새 부품을 끼워 넣는다. 하지만, 사람은 함부로 교체할 수 없다. 그리고 필요할 때마다 필요한 사람을 구하는 것도 어려운 일이다. 따라서, 조직의 역량을 업그레이드하려면 조직을 구성하는 구성원의 역량을 성장시키는",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "취한하늘",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=500&q=75",
      title: "좋은 동료 But 낮은 연봉과 보상",
      desc: "동료는 좋지만 낮은 연봉과 보상 때문에 사표를 품에 넣은 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "한국인성컨설팅&마인드클리닉 노주선",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fc1XInGHUb-c%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLCOaTXElr0es4o4IkPu_DmCmHbrSQ&w=500&q=75",
      title: "같이 일하고 싶은 사람의 포트폴리오 공통점 | 디자이너 특집 2편",
      desc: "",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90",
      infoIconAlt: "youtube",
      info: "eo",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FN56Q10EpAas%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLA0_nrWNVFdTzVBuZxtsNCyQ9k_qg&w=500&q=75",
      title: "퇴사가 답일까 | 회사에서 멘탈 지키는 방법",
      desc: "",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90",
      infoIconAlt: "youtube",
      info: "퇴사한이형",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F3%2F00902011.jpg&w=500&q=75",
      title: "예시 사례를 살펴보는 실제 이력서 작성법 - 백승엽",
      desc: "오늘은 실제 예시를 통해 이력서를 작성하는 방법에 대해 알아봅니다.지난 영상에서 이력서가 무엇인지 살펴봤다면, 이번 영상에서는 이력서를 잘 쓰는 구체적인 방법에 대해 알아봅니다.",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "원티드랩 백승엽",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F6YT6%2Fimage%2FCmDHxrFI_7rHRYvztCN1ZnRJ-iY.jpg&w=500&q=75",
      title: "경력개발, 스스로 해보기",
      desc: "직장인들의 조직 내 수명은 어느 정도일까? 오래전 기사에서 ‘직장인이 체감하는 퇴직 나이는 51.7세’라는 기사를 본 적이 있다. 그럼, 50세 이후부터는 뭘 하고 살아야 할지 걱정된다. '50대의 나’는 회사에 계속 다니고 있을지, 다니고 있다면 어떤 모습일지 상상을 하면서 누구에게나 오는 기회는 아니겠지만 영화 '인턴'의 70세 ‘로버트 드니로’의 모습",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "이수진",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&w=500&q=75",
      title: "이력서가 무엇인지 살펴보기 - 백승엽",
      desc: "이력서는 무엇일까요?기계처럼 반복적으로 작성하고 제출하지만 과연 이렇게 써도 되는 것일까요?취업 준비를 하면서 누군가에게 묻고 도움받고 싶은데, 누구에게 물어야 할지 무엇을 물어봐야 할지도 막막한 것이 현실입니다.그런 분들을 돕기 위해 원티드가 1만 개 기업과 200만 명의 회원들의 채용을 연결하면서 얻은 노하우와 데이터들을 공유하고자 합니다.이에 더해 저 또한 한 명의 구직자로서 취업을 준비하면서, 팀장으로서 누군가를 평가해보면서 쌓았던 얻었던 경험들을 이야기하려고 합니다.자 그럼 시작해볼까요?",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "원티드랩 백승엽",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FsVy%2Fimage%2F0_VawQhoY0NCx-_Hmd5tCWJI4sg.png&w=500&q=75",
      title: "그럼에도 불구하고, 이직을 해야 할 때",
      desc: "구독자 님, 안녕하세요! 아직 봄 날씨에 적응도 채 하지 못했는데 왜인지 모르게 다음 주만 지나면 날씨가 훅 하고 더워질 것만 같은 기세입니다. 짧디 짧은 봄이라 더더욱 아쉽기만 한데요, 구독자 님은 어떻게 이번 봄을 보내고 계신지 모르겠습니다.  오늘 뉴스레터 에세이는 지난주 보내드렸던 글 “홈런을 칠 때까지 기다리는 사람”에 대한 구독자 분들의 피드백을",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      infoIconAlt: "brunch",
      info: "지영킹",
    },
    {
      subject: "커리어고민",
      thumNail:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220517%2F1%2F91648414.jpg&w=500&q=75",
      title: "돈이 먼저일까요, 행복이 먼저일까요?",
      desc: "보상과 맞바꾼 워라밸, 그 안에서 돈과 행복의 우선순위에 대해 고민하는 직장인의 실제 사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을 극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고 즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을 위해!",
      infoIcon:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "한국인성컨설팅&마인드클리닉 노주선",
    },
    {
      subject: "취업/이직",
      thumNail: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2382%2F12a37d37.jpg&w=1200&q=90",
      title: "데이터가 안내하는 하이엔드 조각 투자 '트레져러'| 이 회...",
      desc: "조각 투자를 통해 과거 소수 부자만이 참여했던 수집품 투자 시장을 모두가...",
      infoIcon: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "Wanted",
    },
    {
      subject: "조직문화",
      thumNail: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2204%2F2b0cccd6.jpg&w=1200&q=90",
      title: "한국타이어 | 오피스의 경험, 문화가 되다",
      desc: "구성원에게 이어 좋은 오피스란 무엇일까? 테크노플렉스의 주인공인 두 플레이어와...",
      infoIcon: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "Wanted",
    },
    {
      subject: "취업/이직",
      thumNail: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F1864%2Ffadd87ae.jpg&w=1200&q=90",
      title: "방탄소년단의 음악 저작권을 살 수 있다면? '뮤직카우' | 이 회...",
      desc: "무형자산을 거래할 수 있는 IP 금융 플랫폼을 구현한 건 뮤직카우가 세계...",
      infoIcon: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90",
      infoIconAlt: "wanted",
      info: "Wanted",
    },
  ];


  const Insight = ({children, InsitesList, tagId}) => {
    const [showListData, setShowListData] = useState([]);
    const [postList, setPostList] = useState("");

    console.log(InsitesList);
    console.log(tagId);

    useEffect(() => {
          axios.get(`https://prod.wanted-a.online/insights/tags`,{
          })
          .then(res => {
              console.log(res);
              setPostList(res.data.result);
          })
          .catch(err => console.log(err))
  }, [])
  
    let nowCategory = 0;
  
    function onClickArrowBtn(event) {
      if (nowCategory < 6 && event.target.classList.contains("next-arrow")) {
        nowCategory++;
        document.querySelector(
          ".category-slider"
        ).style.transform = `translateX(-${nowCategory}00px)`;
      } else if (
        nowCategory > 0 &&
        event.target.classList.contains("prev-arrow")
      ) {
        nowCategory--;
        document.querySelector(
          ".category-slider"
        ).style.transform = `translateX(-${nowCategory}00px)`;
      }
    }


  
    return (
      <Section>
        <h2>나에게 필요한 커리어 인사이트</h2>
        <div className="category-container">
          <div className="category-slider">
            {categories.map((category) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    let tempList = listData
                      .filter((data) => {
                        return data.subject === category;
                      })
                      .splice(0, 8);
                    setShowListData([...tempList]);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <PrevArrowBtn onClick={onClickArrowBtn} />
          <NextArrowBtn onClick={onClickArrowBtn} />
        </div>
        <ul className="careerContent-list">
          {showListData.map((data) => {
            return (
              <li>
                <CareerCard data={data} />
              </li>
            );
          })}
        </ul>
        <div className="careerContent-list-more">
          <button
            type="button"
            onClick={() => {
              let tempList = listData
                .filter((data) => {
                  return data.subject === showListData[0].subject;
                })
                .splice(0, 16);
              setShowListData([...tempList]);
            }}
          >
            더 많은 콘텐츠 보기
            <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19">
              <path
                d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </Section>
    );
  };
  
  const Section = styled.section`
    width: 87%;
    max-width: 1060px;
    margin: 0 auto;
    padding: 60px 0;
    overflow: hidden;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    h2 {
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    .category-container {
      margin: 30px 0;
      position: relative;
      .category-slider {
        transition: transform 0.3s;
        width: 1800px;
        height: 40px;
        button {
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          color: #888;
          background-color: white;
          cursor: pointer;
          height: 40px;
          font-size: 15px;
          border-radius: 25px;
          border: 1px solid #e1e2e3;
          float: left;
          margin: 0 5px 30px;
          padding: 10px 20px;
          :focus,
          :hover {
            font-weight: 700;
            background-color: #fff;
            border: 1px solid #36f;
            color: #36f;
          }
        }
      }
      .prev-arrow {
        top: 0;
        left: 0;
        cursor: pointer;
      }
      .next-arrow {
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
    .careerContent-list {
      margin-top: 10px;
      margin-left: -44px;
      display: flex;
      flex-wrap: wrap;
      clear: both;
      list-style: none;
      text-decoration: none;
      li {
        width: calc(25% - 20px);
        margin: 0 10px 50px;
        text-decoration: none;
      }
    }
    .careerContent-list-more button {
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      width: 345px;
      height: 50px;
      font-weight: 700;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      border: 1px solid #e1e2e3;
      border-radius: 25px;
      background-color: white;
      cursor: pointer;
      svg {
        width: 17px;
        height: 17px;
        margin-left: 10px;
        margin-bottom: 5px;
      }
    }
  `;

export default Insight