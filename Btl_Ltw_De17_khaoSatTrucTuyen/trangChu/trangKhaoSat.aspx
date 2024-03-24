<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="trangKhaoSat.aspx.cs" Inherits="Btl_Ltw_De17_khaoSatTrucTuyen.trangChu.trangChu" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="khoaSat.css" rel="stylesheet" />
</head>
<body>
    <div class="tab_container">
        <div class="tab">
            <button class="tab_btn">Câu hỏi</button>
            <button class="tab_btn">Câu trả lời</button>
            <button class="tab_btn">Cài đặt</button>
            <div class="line"></div>
        </div>
        
    </div>

    <hr>
    <div style="height: 20px; background-color: #d9f5f9;"></div>

    <div class="tab_content active" id="tab1">
        <div class="function_container">
            
                <input type="button" onclick="add_clicl()" name="" id="add_question" value="+">
            
        </div>
        <div class="tieuDe_container">
            <input class="nd_tieuDe tieuDe" id="ip_tieuDe" type="text" value="Mẫu không có tiêu đề">
            <hr class="hr_tieuDe">
            <input class="nd_tieuDe moTaTieuDe" id="ip_moTaTieuDe" type="text" placeholder="Mô tả mẫu">
            <hr class="hr_moTaTieuDe">
        </div>

        <div style="height: 20px; background-color: #d9f5f9;"></div>


        <div class="question-answer_container">
            <div>
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
                        <p class="stt_an">*</p>
                        <input class="anwser_text" type="text" placeholder="Tùy chọn">
                        <input class="remove_anwser" type="button" value="X" onclick="remove_anwser_click(this)">
                    </div>
                </div>
                <div class=""></div>
                
                <div class="add_anwser">
                    <!-- <span onclick="them_tc_click(this)">Thêm tùy chọn</span> Hoặc <span onclick="them_khac_click(this)">Thêm câu trả lời khác</span> -->
                    <span onclick="them_tc_click(this)">Thêm tùy chọn</span>
                </div>
            </div>
        </div>
    </div>
    <div class="tab_content" id="tab2">
        <h3>Content for Tab 2</h3>
        <p>This is the content for Tab 2.</p>
    </div>
    <div class="tab_content" id="tab3">
        <h3>Content for Tab 3</h3>
        <p>This is the content for Tab 3.</p>
    </div>
    
    
    <script src="khaoSat.js"></script>
</body>
</html>
