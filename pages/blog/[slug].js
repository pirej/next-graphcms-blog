function PostDetailPage() {
  return (
    <div>
      <h3>The slug is asasdada</h3>
      <h3>The slug is asasdada</h3>
      <h3>The slug is asasdada</h3>
      <h3>The slug is asasdada</h3>
      <h3>The slug is asasdada</h3>
    </div>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
  };
}

export default PostDetailPage;
