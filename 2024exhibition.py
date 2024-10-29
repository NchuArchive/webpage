# app/__init__.py
from flask import Flask
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    from app.routes import main
    app.register_blueprint(main)
    
    return app

# app/routes.py
from flask import Blueprint, render_template_string
main = Blueprint('main', __name__)

@main.route('/exhibition2024')
def exhibition2024():
    html = """
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>校史館特展 - 國立中興大學檔案館</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; }
            header { background-color: #f4f4f4; padding: 1rem; text-align: center; }
            nav { background-color: #333; padding: 0.5rem; position: sticky; top: 0; z-index: 1000; }
            nav a, .dropbtn { color: #fff; text-decoration: none; padding: 0.5rem; }
            .logo { max-width: 300px; height: auto; }
            .logo:hover { opacity: 0.8; }
            .dropdown { position: relative; display: inline-block; }
            .dropdown-content { display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; }
            .dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; display: block; text-align: left; }
            .dropdown-content a:hover { background-color: #f1f1f1; }
            .dropdown:hover .dropdown-content { display: block; }
            .en { font-size: 0.8em; color: #ccc; }
            .exhibition2024 { text-align: center; margin-top: 50px; }
            .exhibition2024 h1 { font-size: 24px; margin-bottom: 20px; }
            .exhibition2024 h2 { font-size: 36px; margin-bottom: 20px; }
            .exhibition2024 p { font-size: 18px; margin-bottom: 10px; }
            .exhibition2024 { text-align: center; }
            .exhibition2024 h1 { font-size: 24px; }
            .exhibition2024-image { max-width: 100%; height: auto; margin: 20px 0; }
            .exhibition2024-characters { font-size: 24px; margin: 20px 0; text-align: center; }
            .exhibition2024 p { text-align: left; text-indent: 2em; }
            
            /* 聯絡我們部分的樣式 */
            .contact-section {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #f4f4f4;
                padding: 20px;
                margin-top: 20px;
            }
            .contact-logo {
                width: 1000;
                height: auto;
            }
            .contact-info {
                text-align: left;
            }
            .contact-info h3 {
                margin-bottom: 10px;
            }
            .contact-info p {
                margin: 5px 0;
            }
            .dropdown {
                position: relative;
                display: inline-block;
            }
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }
            .dropdown:hover .dropdown-content {
                display: block;
            }
            .dropdown:hover > a {
                background-color: #555;
            }
            .dropdown-content a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }
            .dropdown-content a:hover {
                background-color: #f1f1f1;
            }
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
            }
    
            header {
                background-color: #f4f4f4;
                padding: 1rem;
                text-align: center;
            }
    
            .logo {
                max-width: 300px;
                height: auto;
            }
    
            nav {
                background-color: #4d5b5b;
                padding: 0.5rem;
                position: sticky;
                top: 0;
                z-index: 1000;
                text-align: center;
            }
    
            nav a {
                color: #fff;
                text-decoration: none;
                padding: 0.5rem 1rem;
                display: inline-block;
            }
    
            .exhibition-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .exhibition-banner {
                width: 100%;
                max-width: 1200px;
                height: auto;
                margin: 20px 0;
                border-radius: 10px;
                overflow: hidden;
            }
    
            .exhibition-banner img {
                width: 100%;
                height: auto;
                display: block;
            }
    
            .exhibition-title {
                text-align: center;
                font-size: 24px;
                margin: 20px 0;
            }
    
            .exhibition-description {
                font-size: 16px;
                line-height: 1.8;
                text-align: justify;
                margin: 20px 0;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 5px;
            }
    
            .contact-section {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #f4f4f4;
                padding: 20px;
                margin-top: 20px;
            }
    
            .contact-logo {
                width: 200px;
                height: auto;
            }
    
            .contact-info {
                text-align: left;
            }
    
            .contact-info h3 {
                margin-bottom: 10px;
            }
    
            .contact-info p {
                margin: 5px 0;
            }
        </style>
    </head>
    <body>
        <header>
            <a href="{{ url_for('index') }}">
                <img src="{{ url_for('static', filename='logo.png') }}" alt="興湖紀事 National Chung Hsing University Archives" class="logo">
            </a>
        </header>
        <nav>

            <div class="dropdown">
                <a href="/"><span>興大人 </span><span class="en">NCHU</span></a>
                <div class="dropdown-content">
                    <a href="https://alumni.nchu.edu.tw/">校友中心Alumni center</a>
                    <a href="https://nantou.nchu.edu.tw/">南投分部NCHU at NANTOU</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="/about" class="dropbtn"><span>關於興大</span><span class="en"> about NCHU</span></a>
                <div class="dropdown-content">
                    <a href="{{ url_for('motto') }}">校訓 Motto</a>
                    <a href="/about/badge">校徽 Badge</a>
                    <a href="/about/song">校歌 Song</a>
                    <a href="/about/flag">校旗 Flag</a>
                    <a href="/about/symbols">校花校樹 Plants</a>
                    <a href="/about/presidents">歷屆校長 History of the presidency</a>
                    <a href="/about/campus-guide">校史地景導覽 Guide map</a>
                </div>
            </div>

            <a href="/campus"><span>校園風華 </span><span class="en">Campus</span></a>
            <a href="/events"><span>大事紀 </span><span class="en">Events</span></a>

            <div class="dropdown">
                <a href="/special_collection"><span>興大特藏 </span><span class="en">Special collection</span></a>
                <div class="dropdown-content">
                    <a href="/about/digital data">數位特藏資料 Digital data</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="/gallery"><span>認識校史館</span><span class="en">Gallery of History</span></a>
                <div class="dropdown-content">
                    <a href="/about/origin">校史館緣起 Origin</a>
                    <a href="/about/regulations">校史館規章 Regulations</a>
                    <a href="/about/360-degree panorama">校史館360度環景 360-degree panorama </a>
                </div>
            </div>

            <div class="dropdown">
            <a href="/visit"><span>參觀校史館 </span><span class="en">Visit</span></a>
            <div class="dropdown-content">
                <a href="/about/information">參觀資訊 information</a>
                    <a href="/about/Visitor trails">訪客足跡 Visitor trails</a>
                </div>
            </div>

            <a href="/comic"><span>漫畫校史</span><span class="en">Comic</span></a>

            <div class="dropdown">
                <a href="/exhibition"><span>校史特展 </span><span class="en">Special exhibition</span></a>
                <div class="dropdown-content">
                    <a href="{{ url_for('exhibition2023') }}">2023特展-興人誌</a>
                    <a href="{{ url_for('exhibition2024') }}">2024特展-湖泥湖圖</a>
                </div>
            </div>
        </nav>

        <div class="exhibition-container">
            <h1 class="exhibition-title">2024校史館特展-湖泥湖圖</h1>
            <h2 class="exhibition-subtitle">─ 生態、生物、生存主題展 ─</h2>
            
            <div class="exhibition-banner">
                <img src="{{ url_for('static', filename='exhibition202401.png') }}" alt="湖泥湖圖特展橫幅">
            </div>
        
            <div class="exhibition-description">
                中興湖承載了四十七年的往來，也是中興師生以及鄰里的文化交流地帶，逐一孕育出獨有的地標景色。中興湖是如何被形塑出來？今日又如何發展出連日本都驚嘆的生態？歡迎各位走進展區細細觀賞…
            </div>
        
            <div class="exhibition-banner">
                <img src="{{ url_for('static', filename='exhibition202402.png') }}" alt="湖泥湖圖特展橫幅">
            </div>
        
            <div class="exhibition-sections">
                <h2>本次特展分為四個小區塊可供參觀：</h2>
                <div class="section-content">
                    <h3>★ 第一部分：「生」在興湖畔、今昔對比 (面對展區入口左邊牆上)</h3>
                    <div class="exhibition-banner">
                        <img src="{{ url_for('static', filename='exhibition202403.png') }}" alt="湖泥湖圖特展橫幅">
                    </div>
                </div>
        
                <div class="section-content">
                    <h3>★ 第二部分：興湖清淤生態趣 (展區入口正對面)</h3>
                    <div class="exhibition-banner">
                        <img src="{{ url_for('static', filename='exhibition202404.png') }}" alt="湖泥湖圖特展橫幅">
                    </div>
                </div>
        
                <div class="section-content">
                    <h3>★ 第三部分：放浪江湖 (面對展區入口右邊牆面)</h3>
                    <div class="exhibition-banner">
                        <img src="{{ url_for('static', filename='exhibition202405.png') }}" alt="湖泥湖圖特展橫幅">
                    </div>
                </div>
        
                <div class="section-content">
                    <h3>★ 第四部分：沒湖說 (面對展區右手邊)</h3>
                    <div class="exhibition-banner">
                        <img src="{{ url_for('static', filename='exhibition202406.png') }}" alt="湖泥湖圖特展橫幅">
                    </div>
                </div>
        
                <div class="special-note">
                    <p>★展區中間另設有「互動區」，歡迎蒞臨體驗！</p>
                    <p>★校史館開放時間：每週一、三、五 早上 10 點至下午 4 點。</p>
                </div>
            </div>
        </div>
    

        </div>
        <footer class="contact-section">
            <img src="{{ url_for('static', filename='footer_logo.png') }}" alt="國立中興大學圖書館" class="contact-logo">
            <div class="contact-info">
                <h3>聯絡我們</h3>
                <p>維護單位：校史館組</p>
                <p>電話：(04)22840290#412</p>
                <p>傳真：(04)22873454</p>
                <p>E-mail：nchuir@gmail.com</p>
                <p>地址：402台中市南區興大路145號 中興大學圖書館校史館組</p>
            </div>
        </footer>
    </body>
    </html>
    """
    return render_template_string(html)
