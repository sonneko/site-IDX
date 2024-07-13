
function Next() {
    return (
        <>
          <a href={string(getArticle() + 1)}>次の記事</a>
          <a href={string(getArticle() - 1)}>前の記事</a>          
        </>
    )
}

export default Next;