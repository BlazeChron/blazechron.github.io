//import TestBlog from './test-blog.mdx'
import '../globals.css'
import styles from './styles.module.css'


 
export default function Page() {
    const mdxContext = require.context('./blogs', true, /\.mdx$/)
const allMdxFiles = mdxContext.keys().map(filePath => {
  const content = mdxContext(filePath); // This executes the module/file
  const Component = content.default;
  
  return {
    path: filePath,
    module: content,
    Component: Component
  };
});

console.log(allMdxFiles);

const list = allMdxFiles.map((item, key) => {
  const Post = item.Component;
return <div key={key} className={styles.mdxContent} style={{border: '1px solid black'}}>
  <Post />
</div>});

    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {list}
      </main>
    </div>
}
