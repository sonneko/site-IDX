

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


function Footer() {
    return (
        <>
            <footer>
                <Previous data={props.data} />
                <Next data={props.data} />
                <OtherArticle data={props.data} />
                <EditorInfo data={props.data} />
                <SocialMedia data={props.data} />
                <HomeLink data={props.data} />
                <Category data={props.data} />
                <Search data={props.data} />
                <Title data={props.data} />
                <Description data={props.data} />
                <Copylight data={props.data} />
            </footer>
        </>
    )
}

export default Footer;