let add = document.getElementById("add_question")
let tab1 = document.getElementById("tab1")
// let tuy_chon = document.getElementById('tuy_chon')
let value_select = 1


//tab 1 bat dau tu day

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab_btn');
    const tabContents = document.querySelectorAll('.tab_content');
  
    tabs.forEach((tab, index)=> {
        tab.addEventListener('click', (e) => {
            tabs.forEach(tab => {tab.classList.remove("active")})
            tab.classList.add('active')
            var line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + 'px';
            console.log(e.target.offsetWidth );
            line.style.left = e.target.offsetLeft + 'px';


            tabContents.forEach(tab => {tab.classList.remove('active')})
            tabContents[index].classList.add('active')
        })
    })
  });


function add_clicl() {
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div1.style = "height: 20px; background-color: #d9f5f9;"
    div2.className = "question-answer_container"
    div2.innerHTML =
    `<div>
        <div class="question_container">
            <input type="text" class="question" placeholder="Câu hỏi">
            <hr>
        </div>
        <div class="select_container">
            <select name="" id="" onchange="select_change(this)">
                <option value="1"> Trắc nghiệm</option>
                <option value="2">Hộp điểm</option>
                <option value="3">Đoạn</option>
                <option value="4">Menu thả xuống</option>
            </select>
            <div class="select_icon">
                <i class="fa-sharp fa-solid fa-caret-down"></i>
            </div>
        </div>
        <input type="button" value="X" class="remove_question" onclick="remove_question_click(this)">
    </div>

    <div class="answer_container">
        <div class="tuy_chon">
            <div class="answer">
                <!-- <input class="answer_type" type="radio" name="1" id=""> -->
                <p class="stt_an">*</p>
                <input class="anwser_text" type="text" placeholder="Tùy chọn">
                <input class="remove_anwser" type="button" value="X" onclick="remove_anwser_click(this)">
            </div>
        </div>
        <div></div>
        <div class="add_anwser">
            <!-- <span onclick="them_tc_click(this)">Thêm tùy chọn</span> Hoặc <span onclick="them_khac_click(this)">Thêm câu trả lời khác</span> -->
            <span onclick="them_tc_click(this)">Thêm tùy chọn</span>
        </div>
    </div>`
    // tab1.appendChild(div1)
    tab1.appendChild(div2)
}

remove_anwser_click = (btn) => {
    let button_parent = btn.closest('.answer')
    button_parent.parentNode.remove(button_parent)
    
}


function them_khac_click(sp) {
    tuy_chon.innerHTML += 
    `<div class="answer">
        <input class="answer_type" type="radio" name="1" id="">
        <input class="anwser_text" type="text" placeholder="Tùy chọn">
        <input class="remove_anwser" type="button" value="X" onclick="remove_anwser_click(this)">
    </div>`
}

function them_tc_click(them_tc) {
    let i = 0
    let cur = them_tc.parentNode.previousElementSibling
    let div = document.createElement('div')
    div.className = "answer"
    div.innerHTML = 
    `<div class="answer">
        <p class="stt_an">*</p>
        <input class="anwser_text" type="text" placeholder="Tùy chọn">
        <input class="remove_anwser" type="button" value="X" onclick="remove_anwser_click(this)">
    </div>`
    cur.appendChild(div)
}


function select_change(sl) {
    value_select = sl.value;
    console.log(value_select);
    let addAnwserDiv = sl.parentNode;

    
    let anw_container = addAnwserDiv.parentNode.nextElementSibling;


    anw_container.querySelectorAll('.answer_type').forEach(function(elenment) {
        console.log(elenment);
        switch(value_select) {
            case "1": 
                elenment.type = "radio"
                break
            case "2": 
                elenment.type = "checkbox"
                break
            case "3": 
                elenment.type = "radio"
                break
            case "4": 
                elenment.type = "radio"
                break
            default: 
                elenment.type = "radio"
                break
        }
    })
}

function remove_question_click(btn) {
    let hhh = btn.closest('.question-answer_container')
    console.log(hhh.innerHTML);
    tab1.removeChild(hhh)
}