/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

var win = 0;
var lose = 0;
var count = 0;

while (count < 3) {
    const rps = Math.floor(Math.random() * 3);
    let rpsStr;

    if (rps == 0) {
        rpsStr = "가위";
    } else if (rps == 1) {
        rpsStr = "바위";
    } else if (rps == 2) {
        rpsStr = "보";
    }

    let userRpsStr = prompt("안 내면 진 거, 가위바위보!");
    let userRps;

    if (userRpsStr == "가위") {
        userRps = 0;
    } else if (userRpsStr == "바위") {
        userRps = 1;
    } else if (userRpsStr == "보") {
        userRps = 2;
    } else {
        alert("안 냈으니 패배");
        lose++;
        count++;
        continue;
    }

    let result = rps - userRps;
    if (result < 0) result += 3;

    switch (result) {
        case 1:
            alert(`[${count + 1}라운드]
당신의 선택 : ${userRpsStr}
컴퓨터의 선택 : ${rpsStr}
패배했습니다`);
            lose++;
            break;
        case 2:
            alert(`[${count + 1}라운드]
당신의 선택 : ${userRpsStr}
컴퓨터의 선택 : ${rpsStr}
승리했습니다`);
            win++;
            break;
        case 0:
            alert(`[${count + 1}라운드]
당신의 선택 : ${userRpsStr}
컴퓨터의 선택 : ${rpsStr}
무승부입니다`);
            break;
        default:
            alert("에러 발생");
    }
    count++;
    if (win == 2) break;
}

if (win > lose) {
    alert("🎉 게임 종료: 당신의 승리입니다!");
} else if (win == lose) {
    alert("게임 종료: 무승부!");
} else {
    alert("게임 종료: 당신의 패배입니다");
}

// 배열을 통해서 {"가위", "바위", "보"}에 index접근?
