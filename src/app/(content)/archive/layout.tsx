const ArchiveLayout = (props: any) => {
  const { archive, latest } = props;

  return (
    <div className="m-3">
      <h1>News Archive</h1>

      <section>{archive}</section>
      <hr />
      <section>{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
