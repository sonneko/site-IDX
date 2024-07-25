//components
import Category from "../category";
import Next from "../next";
import Previous from "../previous";
import Tag from "../tag";
import RenewalDate from "../renewalDate";
import Title from "../title";
import Reference from "../reference";
import OtherArticle from "../otherArticle";
import EditorInfo from "../editorInfo";
import SocialMedia from "../socialMedia";
import Copylight from "../copylight";
import Search from "../search";
import HomeLink from "../homeLink";
import IndexLinks from "../indexLinks";
import ArticleTitle from "../articleTitle";
import MovingButton from "../movingButton";
import Hamburger from "../hamburger";
import XLinks from "../xLinks";
import Description from "../description";


function Header() {
    return (
        <>
            <header>
                <Title data={props.data} />
                <Next data={props.data} />
                <Previous data={props.data} />
                <Tag data={props.data} />
                <RenewalDate data={props.data} />
                <ArticleDescription data={props.data} />
                <ArticleTitle data={props.data} />
            </header>
        </>
    )
}

export default Header;