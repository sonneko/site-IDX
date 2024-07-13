function Hamburger() {
    return (
        <div class="hamburger-menu">
            <input type="checkbox" id="menu-btn-check" />
            <label for="menu-btn-check" class="menu-btn"><span></span></label>
            <div class="menu-content">
                <ul>
                    <li><a href="index.html">ホーム</a></li>
                    <li><a href="blog.html">ブログ</a></li>
                    <li><a href="trivia.html">毎日雑学</a></li>
                    <li><a href="member.html">メンバー</a></li>
                    <li><a href="contest.html">コンテスト</a></li>
                    <li><a href="group.html">グループ</a></li>                    <li><a href="intro.html">自己紹介</a></li>
                    <li><a href="comment.html">コメント</a></li>
                    <li><a href="intro.html">チームについて</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger;