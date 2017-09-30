import { Spin } from "antd";
import { connect } from "dva";
import path from "path";
import { Button, LazyLoad, Markdown, Tags } from "../../components";
import setTitle from "../../utils/setTitle";
import styles from "./index.scss";

const State = state => ({
  loading: state.loading.global,
  blogToc: state.blogToc
});

export default connect(State)(({ loading, blogToc }) => {
  setTitle("Blog");
  const BlogPage = (record, key) => (
    <LazyLoad key={key} className={styles.post}>
      <Markdown data={record} />
      <div className={styles.footer}>
        {loading ? "" : <Tags data={record.tag} />}
        <Button to={path.join("blog", record.filename)}>Read More</Button>
      </div>
    </LazyLoad>
  );
  return (
    <div className={styles.blog}>
      <div className={styles.list}>
        {!loading ? (
          blogToc.map(BlogPage)
        ) : (
          <Spin style={{ width: "100%", lineHeight: "80vh" }} size="large" />
        )}
      </div>
    </div>
  );
});
