const quotes = [
    {
        quote:"행복은 찾는 것이 아니라 만드는 것이다." ,
        author: "카밀라 아이링 킴볼",
    },
    {
        quote:"행복은 우연이 아니라 선택이다." ,
        author: "짐 론",
    },
    {
        quote:"실패는 성공의 맛을 내는 최고의 양념이다." ,
        author: "트루먼 카포티",
    },
    {
        quote:"할 수 없다고 생각하는 일을 해야 한다." ,
        author: "엘리너 루즈벨트",
    },
    {
        quote:"꿈이 있으면 잡아야 하고 절대 놓지 말아야 한다." ,
        author: "캐롤 버넷",
    },
    {
        quote:"불가능은 오직 의지가 없는 사람에게만 존재한다." ,
        author: "존 키츠",
    },
    {
        quote:"큰 꿈을 꾸고 감히 실패하라 " ,
        author: "노먼 본",
    },
    {
        quote:"자신에게 하기 싫은 일을 남에게도 하지 말라." ,
        author: "공자",
    },
    {
        quote:"행복은 우리 자신에게 달려 있다." ,
        author: "아리스토텔레스",
    },
    {
        quote:"불행한 사람은 다른 사람의 불행에서 위안을 얻는다." ,
        author: "이솝",
    },
    {
        quote:"사랑이 없는 삶은 꽃도 열매도 없는 나무와 같다." ,
        author: "칼릴 지브란",
    },
    {
        quote:"더 많이 판단할수록 덜 사랑하게 된다." ,
        author: "오너 드 발자크",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;