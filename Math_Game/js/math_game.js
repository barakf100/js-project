import { getRandomIntInclusive } from "./random.js";

window.addEventListener("load", () => {
    document.querySelector("#submit").disabled = true; //disable sec button
    let ex,
        nameCounter = localStorage.length;
    console.log(nameCounter);
    if (nameCounter) {
        setTimeout(() => {
            initalLogs();
        }, 3000);
    }
    // choose numbers and enable sec button
    document.querySelector("#send").addEventListener("click", () => {
        document.querySelector("#answer").style.color = "black";
        ex = newEX();
        document.querySelector(
            "#game label"
        ).innerHTML = `${ex[0]} ${ex[2]} ${ex[1]} = `;
        document.querySelector("#send").disabled = true;
        document.querySelector("#submit").disabled = false;
    });

    document.querySelector("#submit").addEventListener("click", () => {
        if (answerCheck(ex[0], ex[1], ex[2])) {
            answerFed("green");
            setItem(ex[0], ex[1], ex[2], "green");
        } else {
            answerFed("red");
            setItem(ex[0], ex[1], ex[2], "red");
        }
        document.querySelector("#send").disabled = true;
        document.querySelector("#send").disabled = false;
    });

    document.querySelector("#resetLog").addEventListener("click", () => {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            let ul = document.querySelector(`.log${parseInt(i / 10)}`);
            ul.removeChild(
                document.querySelector(`.log${parseInt(i / 10)} li`)
            );
        }
        localStorage.clear();
        nameCounter = localStorage.length;
        document.querySelector("#send").style.display = "";
        document.querySelector("#submit").style.display = "";
    });

    const newEX = () => {
        let { value: v1 } = document.querySelector("#num1"),
            { value: v2 } = document.querySelector("#num2"),
            num1 = getRandomIntInclusive(v1, v2),
            num2 = getRandomIntInclusive(v1, v2),
            action = methodChoose();
        return [num1, num2, action];
    };

    // random method choose
    const methodChoose = () => {
        let action = getRandomIntInclusive(1, 4);
        switch (action) {
            case 1:
                return "+";
            case 2:
                return "-";
            case 3:
                return "*";
            case 4:
                return "/";
        }
    };

    // check answer
    const answerCheck = (num1, num2, action) => {
        let { value } = document.querySelector("#answer"),
            append = document.querySelector("#game");
        switch (action) {
            case "+":
                if (num1 + num2 == value) {
                    return true;
                } else {
                    return false;
                }
                break;
            case "-":
                if (num1 - num2 == value) {
                    return true;
                } else {
                    return false;
                }
                break;
            case "*":
                if (num1 * num2 == value) {
                    return true;
                } else {
                    return false;
                }
                break;
            case "/":
                if (num1 / num2 == value) {
                    return true;
                } else {
                    return false;
                }
                break;

            default:
                break;
        }
    };

    // asnwer feedbeck
    const answerFed = (color) => {
        document.querySelector("#answer").style.color = color;
    };
    const setItem = (num1, num2, action, color) => {
        // set to logs and local storage
        let answer = document.querySelector("#answer").value,
            store = `${num1}${action}${num2}=${answer}`;
        localStorage.setItem(`name_${nameCounter}`, `${store}#${color}`);
        myAppend(store, color, nameCounter++);
        if (nameCounter >= 50) {
            document.querySelector("#send").style.display = "none";
            document.querySelector("#submit").style.display = "none";
        }
    };
    const myAppend = (store, color, order) => {
        let li = document.createElement("li"),
            log = document.querySelector(`.log${parseInt(order / 10)}`);
        console.log(nameCounter);
        li.innerHTML = store;
        li.style.color = color;
        log.appendChild(li);
    };
    const getItems = () => {
        let exArr = [];
        for (let i = 0; i < localStorage.length; i++) {
            exArr = [...exArr, localStorage.getItem(`name_${i}`)];
        }
        return exArr;
    };
    const initalLogs = () => {
        let prevLog = getItems();
        for (let i = 0; i < prevLog.length; i++) {
            myAppend(
                extractColor(prevLog[i])[0],
                extractColor(prevLog[i])[1],
                i
            );
        }
    };
    const extractColor = (str) => {
        let arr = [
            str.slice(0, str.indexOf("#")),
            str.slice(str.indexOf("#") + 1),
        ];
        return arr;
    };
});
/*TODO:
        - local storage + logs-
    - every 10 in logs start new ul on right
    */
